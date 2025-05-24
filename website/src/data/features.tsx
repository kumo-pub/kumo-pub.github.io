/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: '轻量级CI',
      id: 'homepage.features.lite-ci.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.lite-ci.text">
        简洁易用轻量级 c++ 集成工具，便携易于安装，一键集成
        依赖库，基于CMake构建。适应于现在C++后端服务。
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'MACH设计理念',
      id: 'homepage.features.mach-design.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.mach-design.text">
        基于MACH理念设计，以最小的代价实现快速开发、部署和扩展应用程序。
        使得您的应用得以保持高度的灵活性和行动力，保障服务的竞争力。
      </Translate>
    ),
  },
  {
    title: translate({
      message: '多层次架构设计',
      id: 'homepage.features.multi-layout.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.multi-layout.text">
        多层结构的体系设计，即保证了用户快速的构建应用，同时保持了
        深入迭代和扩展的能力。
      </Translate>
    ),
  }
];

export default FEATURES;
