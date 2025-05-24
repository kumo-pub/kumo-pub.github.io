/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/jeff-lothar.png'),
    name: 'Jeff 李寅斌',
    title: translate({
      id: 'homepage.quotes.jeff-lothar.title',
      message: 'Kumo 首席架构师',
      description: 'Title of quote of Jeff Lothar on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.jeff-lothar"
        description="Quote of jeff lothar on the home page">
          主持千亿级搜索工程架构工作，常怀梦想，以工程自动化
          赋予应用快速迭代和扩展的能力。幸运的是，kumo诞生了，并且能够完成
          这一目标。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/ma.jpg'),
    name: 'Ramos 马宇强',
    title: translate({
      id: 'homepage.quotes.ramos.title',
      message: '服务端程序员',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.ramos"
        description="Quote of Ramos on the home page">
        c++的研发生态在我刚参加工作时就饱受困扰，自从kmpkg体系诞生，我们花在项目集成上的时间降低了80%以上，kmpkg帮助我们提升20%-30%的效率。很高兴能我是这项工作的作者。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/libo.jpeg'),
    name: 'Ricky 李波',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '首席系统专家',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
        互联网大厂，20多年的服务端开发经验，对操作系统，存储，linux内核等领域积累了深厚的生产环境经验。很高兴能将这些经验以产品的形式提供出来。
      </Translate>
    ),
  },
];

export default QUOTES;
