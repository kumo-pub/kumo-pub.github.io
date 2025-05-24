1. Clone the repository

    The first step is to clone the kmpkg repository from GitHub. The repository contains scripts to acquire the kmpkg executable and a registry of curated open-source libraries maintained by the kmpkg community. To do this, run:

    ```console
    git clone https://gitee.com/kumo-pub/kmpkg.git
    ```

    The kmpkg curated registry is a set of over 2,000 open-source libraries. These libraries have been validated by kmpkg's continuous integration pipelines to work together. While the kmpkg repository does not contain the source code for these libraries, it holds recipes and metadata to build and install them in your system.

2. Run the bootstrap script

    Now that you have cloned the kmpkg repository, navigate to the `kmpkg` directory and execute the bootstrap script:

    ::: zone pivot="shell-cmd"

    ```console
    cd kmpkg && bootstrap-kmpkg.bat
    ```

    ::: zone-end
    ::: zone pivot="shell-powershell"

    ```console
    cd kmpkg; .\bootstrap-kmpkg.bat
    ```

    ::: zone-end
    ::: zone pivot="shell-bash"

    ```console
    cd kmpkg && ./bootstrap-kmpkg.sh
    ```

    ::: zone-end

    The bootstrap script performs prerequisite checks and downloads the kmpkg executable.

    That's it! kmpkg is set up and ready to use.
