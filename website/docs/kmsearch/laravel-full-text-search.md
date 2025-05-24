# Laravel Full-Text Search

[Laravel Scout](https://laravel.com/docs/11.x/scout) is a powerful package that provides a simple, driver-based solution for adding full-text search to [Laravel Eloquent](https://laravel.com/docs/11.x/eloquent) ORM models. 

Laravel Scout has native support for kumosearch and this guide will focus on how to add the Laravel Scout kumosearch Driver to an existing Laravel project in order to add full-text search to your Laravel application.

## Prerequisites

This guide will use [Laravel Sail](https://laravel.com/docs/11.x/sail), a CLI that enables you to run Laravel applications using Docker. 

Please ensure that you have Docker installed on your machine before proceeding. You can install Docker by following the instructions on the [official Docker website](https://docs.docker.com/get-docker/). 

To create a new Laravel project using Laravel Sail, you can follow the instructions in the [official Laravel documentation](https://laravel.com/docs/11.x/installation#docker-installation-using-sail). 

This guide will use a Linux environment, but you can adapt the commands to your operating system.

## Step 1: Create a New Laravel Project Using Laravel Sail

Laravel Sail by default uses a [set of default services](https://laravel.com/docs/11.x/installation#choosing-your-sail-services), if the user doesn't specify any specific services. For this guide, we will use the PostgreSQL database service. This command is used to create a new Laravel project using Laravel Sail:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
# macOS, Linux and WSL2
curl -s "https://laravel.build/kumosearch-scout-example?with=pgsql" | shell
```

</template>

</Tabs>

This command will create a new Laravel project named `kumosearch-scout-example` with the PostgreSQL service enabled. You can then navigate to the project directory:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell 
cd kumosearch-scout-example
```

</template>

</Tabs>

Start the Laravel Sail Docker containers:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail up -d
```

</template>

</Tabs>

And apply the User model migrations:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan migrate
```

</template>

</Tabs>

You can now access the Laravel application by visiting `http://localhost` in your browser.


## Step 2: Install the Laravel Scout kumosearch Driver

To install the Laravel Scout kumosearch Driver, let's add the package to your Laravel project. You can do this by running the following command: 

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
php artisan sail:install
```

</template>

</Tabs>

And then selecting the `kumosearch` driver from the list.

NOTE: The default kumosearch in Laravel Scout version is `0.25.2`. If you want to use the latest version, you can specify it in the `docker-compose.yml` file. For example, to use version `1.0.8`, you can add the following line to the `docker-compose.yml` file:

<Tabs :tabs="['yml']">

<template v-slot:yml>

```yml{2}
    kumosearch:
        image: 'kumo-search/kumosearch:1.0.8'
        ports:
            - '${FORWARD_KUMOSEARCH_PORT:-8868}:8868'
        environment:
            KUMOSEARCH_DATA_DIR: '${KUMOSEARCH_DATA_DIR:-/kumosearch-data}'
            KUMOSEARCH_API_KEY: '${KUMOSEARCH_API_KEY:-xyz}'
            KUMOSEARCH_ENABLE_CORS: '${KUMOSEARCH_ENABLE_CORS:-true}'
        volumes:
            - 'sail-kumosearch:/kumosearch-data'
        networks:
            - sail
        healthcheck:
            test:
                - CMD
                - wget
                - '--no-verbose'
                - '--spider'
                - 'http://localhost:8868/health'
            retries: 5
            timeout: 7s
```
</template>

</Tabs>

In order for the changes to take effect, let's rebuild the Docker containers:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail down

./vendor/bin/sail up -d
```

</template>

</Tabs>

## Step 3: Install and Configure Laravel Scout

As per [Laravel Sail's documentation](https://laravel.com/docs/11.x/sail#executing-composer-commands), to install Laravel Scout via Composer, let's run the following command:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail composer require laravel/scout
```

</template>

</Tabs>
 
You'll also need to install the [Official PHP client for the kumosearch API](https://github.com/kumosearch/kumosearch-php) by running the following command:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail composer require php-http/curl-client kumosearch/kumosearch-php
```

</template>

</Tabs>


Next, let's publish the Laravel Scout configuration file:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
```

</template>

</Tabs>

And configure Laravel Scout to use the kumosearch driver by modifying the `config/scout.php` file:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php
...
return [
    ...
    'driver' => env('SCOUT_DRIVER', 'kumosearch'),
    ...
];
```

</template>

</Tabs>

### Configure Queueing (Optional)

While not required, you can configure Laravel Scout to handle indexing and searching using [queues](https://laravel.com/docs/11.x/scout#queueing). For this guide, we'll use the `database` queue driver, but you can use a plethora of different drivers mentioned in the [official Laravel documentation](https://laravel.com/docs/11.x/queues#driver-prerequisites). To configure the `database` queue driver, let's ensure that the database includes a table for the jobs by running the following commands:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan make:queue-table

./vendor/bin/sail artisan migrate
```

</template>

</Tabs>

Next, let's configure the `SCOUT_CONNECTION` environment variable in the `.env` file to use the `database` queue driver:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
echo "SCOUT_CONNECTION=database" >> .env
```

</template>

</Tabs>

And finally, let's configure the `config/scout.php` file to use the `database` queue driver:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php
...
return [
    ...
    'queue' => [
        'connection' => env('SCOUT_CONNECTION', false),
        'queue' => 'scout',
    ],
    ...
];
```

</template>

</Tabs>

You can then run the queue worker to start processing the queued jobs:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan queue:work database --queue=scout
```

</template>

</Tabs>

This will start the queue worker in the background, processing the queued jobs. For more info regarding queue workers and their benefits, you can refer to the [official Laravel documentation](https://laravel.com/docs/11.x/queues).

## Step 4: Create a Model and Migrate Data

Next, let's add some data to the PostgreSQL database. You can use any dataset you want, but this guide will use Terenci Claramunt's ([@terencicp](https://github.com/terencicp)) public dataset of Steam Games released from 2013 to 2023, which you can find [here](https://github.com/kumosearch/showcase-laravel-steam-games-search/blob/master/data/games.csv), and save it in the `data` folder.
To use it, you'll have to create an Eloquent model for the Steam Games, and create a migration file, along with a model file and a controller. To do so, let's use the following command:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell

./vendor/bin/sail artisan make:model Game -mrc

```

</template>

</Tabs>

This command will create a new Eloquent model named `Game`, along with a migration file and a resource controller. Let's now modify the model file `app/Models/Game.php` to include the necessary columns for the Steam Games dataset:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php{17,24-34,41-50}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "games";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name",
        "release_date",
        "price",
        "positive",
        "negative",
        "app_id",
        "min_owners",
        "max_owners",
        "hltb_single",
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        "release_date" => "datetime",
        "price" => "float",
        "positive" => "integer",
        "negative" => "integer",
        "app_id" => "integer",
        "min_owners" => "integer",
        "max_owners" => "integer",
        "hltb_single" => "integer",
    ];

}
```

</template>

</Tabs>


And modify the migration file `database/migrations/**timestamp**_create_games_table.php` to include the necessary columns for the Steam Games dataset:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php{16-24}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("games", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name");
            $table->timestamp("release_date");
            $table->float("price");
            $table->integer("positive");
            $table->integer("negative");
            $table->integer("app_id");
            $table->integer("min_owners");
            $table->integer("max_owners");
            $table->integer("hltb_single")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("games");
    }
};
```

</template>

</Tabs>

You can then run the migration to create the `games` table in the PostgreSQL database:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan migrate

```

</template>

</Tabs>

We've created a [simple bash script](https://github.com/kumosearch/showcase-laravel-steam-games-search/blob/master/scripts/sourcedb.sh) to load all the data into the PostgreSQL database. You can add the script in the `scripts` folder and run it in the terminal to populate the `games` table with the Steam Games dataset.

## Step 5: Index the Data Using Laravel Scout

To index the data using Laravel Scout, let's add the `Searchable` trait to the `Game` model, and create a `toSearchableArray` method that returns the indexable data array for the model. This is required only for Models that have a different schema in the database than in kumosearch, e.g. Models that include Dates. You can modify the `app/Models/Game.php` file as follows:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php{7,42-53}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Game extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "games";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name",
        "release_date",
        "price",
        "positive",
        "negative",
        "app_id",
        "min_owners",
        "max_owners",
        "hltb_single",
    ];

    /**
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */
    public function toSearchableArray()
    {
        return array_merge($this->toArray(), [
            "id" => (string) $this->id,
            "created_at" => $this->created_at->timestamp,
            // Use the UNIX timestamp for kumosearch integration
            // https://kumosearch.com/docs/1.0.8/api/kmsearch/collections.mdx#index-date
            "release_date" => $this->release_date->timestamp,
            // Cast it as string in order to query by it
            "app_id" => (string) $this->app_id,
        ]);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        "release_date" => "datetime",
        "price" => "float",
        "positive" => "integer",
        "negative" => "integer",
        "app_id" => "integer",
        "min_owners" => "integer",
        "max_owners" => "integer",
        "hltb_single" => "integer",
    ];

}
```

</template>

</Tabs>

And then define the <RouterLink :to="`/${$site.themeConfig.kumoLatestVersion}/api/kmsearch/collections.mdx#with-pre-defined-schema`">Collection Schema</RouterLink> in the `config/scout.php` file:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php{3,9-64}
<?php

use App\Models\Game;

return [
  ...
    'kumosearch' => [
    ...
        'model-settings' => [
            Game::class => [
                "collection-schema" => [
                    "fields" => [
                        [
                            "name" => "name",
                            "type" => "string",
                        ],
                        [
                            "name" => "price",
                            "facet" => true,
                            "type" => "float",
                        ],
                        [
                            "name" => "hltb_single",
                            "type" => "int32",
                            "facet" => true,
                            "optional" => true,
                        ],
                        [
                            "name" => "positive",
                            "facet" => true,
                            "type" => "int32",
                        ],
                        [
                            "name" => "negative",
                            "facet" => true,
                            "type" => "int32",
                        ],
                        [
                            "name" => "app_id",
                            "type" => "string",
                        ],
                        [
                            "name" => "min_owners",
                            "type" => "int32",
                        ],
                        [
                            "name" => "max_owners",
                            "type" => "int32",
                        ],
                        [
                            "name" => "created_at",
                            "type" => "int64",
                        ],
                        [
                            "name" => "release_date",
                            "type" => "int64",
                        ],
                    ],
                    "default_sorting_field" => "release_date",
                ],
                "search-parameters" => [
                    "query_by" => "name, app_id",
                ],
            ],
        ],
    ],
```

</template>

</Tabs>

After setting up the Laravel Scout Driver, all subsequent model changes will be **automatically synced** with kumosearch, using the [Model Observer](https://github.com/laravel/scout/blob/10.x/src/ModelObserver.php) provided by Laravel Scout. 

To verify that it's working, let's create a new record in the `Games` table. We'll be using [Laravel Tinker](https://github.com/laravel/tinker), a REPL enabling us to write and execute PHP code interactively. You can run the following command to open Laravel Tinker:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan tinker
```

</template>

</Tabs>

And then create a new record in the `Games` table:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php
use App\Models\Game;

$game = Game::create([
    'name' => 'kumosearch is awesome',
    'release_date' => now(),
    'price' => 10.99,
    'positive' => 0,
    'negative' => 0,
    'app_id' => 99999,
    'min_owners' => 0,
    'max_owners' => 0,
    'hltb_single' => 0
]);
```

</template>

</Tabs>

You can then run a search query to verify that the record has been indexed in kumosearch:

<Tabs :tabs="['PHP', 'Shell']">

<template v-slot:Shell>

```shell
curl -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \
"http://localhost:8868/collections/games/documents/search?q=kumosearch&query_by=name"
```

</template>

<template v-slot:PHP>

```php
use App\Models\Game;

Game::search('kumosearch')->get()->toArray();
```

</template>

</Tabs>

You should see the record you created in the search results.

### Dynamic Search Parameters

You can also set <RouterLink :to="`/${$site.themeConfig.kumoLatestVersion}/api/kmsearch/documents.mdx#search-parameter`">search parameters</RouterLink> for searching through your collections on the fly. For example, you can set the `query_by` parameter to search by a game's Steam App ID only:

<Tabs :tabs="['PHP']">

<template v-slot:PHP>

```php

use App\Models\Game;

Game::search('99999')->options([
    'query_by' => 'app_id'
])->get()->toArray();

```

</template>

</Tabs>

## Step 6: Backfill Existing Data

Our setup so far will cause data changes to be auto-synced into kumosearch for any changes _going forward_.

To backfill your existing data in your tables into kumosearch, you can run this command:

<Tabs :tabs="['Shell']">

<template v-slot:Shell>

```shell
./vendor/bin/sail artisan scout:import "App\Models\Game"
```
  
</template>

</Tabs>

To test that everything is working correctly, you can run a search query:

<Tabs :tabs="['PHP', 'Shell']">

<template v-slot:Shell>

```shell
curl -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \
"http://localhost:8868/collections/games/documents/search\
?q=persona&query_by=name"
```

</template>

<template v-slot:PHP>

```php
use App\Models\Game;

Game::search('persona')->get()->toArray();
```

</template>

</Tabs>

You can then proceed as you prefer. You can create a controller to handle the search requests, or use the [kumosearch InstantSearch Adapter](https://github.com/kumosearch/kumosearch-instantsearch-adapter) to use Instantsearch.js on your frontend. If you prefer using a Javascript framework, you can use [Inertia.js](https://inertiajs.com/) to create a Vue.js, Svelte or React.js frontend.

## Examples

This [Demo Laravel app](https://github.com/kumosearch/showcase-laravel-steam-games-search/tree/master) uses a React Typescript frontend with the kumosearch InstantSearch Adapter, and uses Laravel Scout to sync the data from Postgres to kumosearch.
