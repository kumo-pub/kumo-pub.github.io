/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  "docs": [
    "introduction",
    {
      "type": "category",
      "label": "基础准备",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
        "env_prepare_be",
        "env_prepare_fe"
      ]
    },
    {
      "type": "category",
      "label": "持续集成 -- kmpkg",
      "link": {
        "type": "generated-index",
        "title": "kmpkg documents",
        "description": "Let's learn about the most important Docusaurus concepts!",
        "keywords": [
          "kmpkg"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        {
          "type": "category",
          "label": "快速开始",
          "link": {
            "type": "generated-index",
            "title": "kmpkg documents"
          },
          "items": [
            "kmpkg/get_started/overview",
            "kmpkg/get_started/setup-kmpkg",
            "kmpkg/get_started/get-started-cmake",
            "kmpkg/get_started/get-started-vscode",
            "kmpkg/get_started/get-started-clion",
            "kmpkg/get_started/get-started-adding-to-registry",
            "kmpkg/get_started/get-started-packaging",
            "kmpkg/get_started/get-started-vs",
            "kmpkg/get_started/get-started-msbuild"
          ]
        },
        {
          "type": "category",
          "label": "使用项目",
          "link": {
            "type": "generated-index",
            "title": "kmpkg documents"
          },
          "items": [
            "kmpkg/consume/manifest-mode",
            "kmpkg/consume/classic-mode",
            "kmpkg/consume/lock-package-versions",
            "kmpkg/consume/boost-versions",
            "kmpkg/users/examples/selecting-llvm-features",
            "kmpkg/users/examples/overlay-triplets-linux-dynamic",
            {
              "type": "category",
              "label": "教程： 安装自定义依赖项",
              "link": {
                "type": "generated-index",
                "title": "kmpkg documents"
              },
              "items": [
                "kmpkg/consume/install-locally-modified-package",
                "kmpkg/consume/git-registries",
                "kmpkg/users/authentication"
              ]
            },
            {
              "type": "category",
              "label": "教程： 使用缓存",
              "link": {
                "type": "generated-index",
                "title": "kmpkg documents"
              },
              "items": [
                "kmpkg/consume/binary-caching-overview",
                "kmpkg/consume/binary-caching-default",
                "kmpkg/consume/binary-caching-local",
                "kmpkg/consume/asset-caching"
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "生成项目",
          "link": {
            "type": "generated-index",
            "title": "kmpkg documents"
          },
          "items": [
            "kmpkg/examples/packaging-gitee-repos",
            "kmpkg/examples/packaging-zipfiles",
            "kmpkg/examples/patching",
            "kmpkg/produce/update-package-version",
            "kmpkg/maintainers/handling-usage-files",
            {
              "type": "category",
              "label": "教程： 发布依赖",
              "link": {
                "type": "generated-index",
                "title": "kmpkg documents"
              },
              "items": [
                "kmpkg/maintainers/registries",
                "kmpkg/produce/publish-to-a-git-registry"
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "概念",
          "link": {
            "type": "generated-index",
            "title": "kmpkg documents"
          },
          "items": [
            "kmpkg/concepts/asset-caching",
            "kmpkg/users/binarycaching",
            {
              "type": "category",
              "label": "构建系统",
              "link": {
                "type": "generated-index",
                "title": "kmpkg documents"
              },
              "items": [
                "kmpkg/concepts/build-system-integration",
                "kmpkg/users/buildsystems/cmake-integration",
                "kmpkg/users/buildsystems/msbuild-integration",
                "kmpkg/users/buildsystems/manual-integration"
              ]
            },
            "kmpkg/concepts/classic-mode",
            "kmpkg/concepts/continuous-integration",
            "kmpkg/concepts/default-features",
            "kmpkg/concepts/features",
            "kmpkg/concepts/manifest-mode",
            "kmpkg/concepts/supported-hosts",
            "kmpkg/users/host-dependencies",
            {
              "type": "category",
              "label": "源代码注册表",
              "link": {
                "type": "generated-index",
                "title": "kmpkg documents"
              },
              "items": [
                "kmpkg/contributing/maintainer-guide",
                "kmpkg/contributing/cmake-guidelines",
                "kmpkg/contributing/pr-review-checklist"
              ]
            },
            "kmpkg/concepts/overlay-ports",
            "kmpkg/concepts/package-name-resolution",
            "kmpkg/concepts/ports",
            "kmpkg/concepts/registries",
            "kmpkg/maintainers/authoring-script-ports",
            "kmpkg/concepts/system-package-managers",
            "kmpkg/concepts/triplets",
            "kmpkg/users/versioning.concepts",
            "kmpkg/concepts/registries"
          ]
        },
        {
          "type": "category",
          "label": "参考",
          "link": {
            "type": "generated-index",
            "title": "kmpkg 参考手册"
          },
          "items": [
            "kmpkg/reference/kmpkg-json",
            "kmpkg/reference/kmpkg-configuration-json",
            "kmpkg/users/assetcaching",
            "kmpkg/reference/binarycaching",
            "kmpkg/users/config-environment",
            "kmpkg/reference/installation-tree-layout",
            "kmpkg/reference/policies",
            {
              "type": "category",
              "label": "Profile函数",
              "link": {
                "type": "generated-index",
                "title": "cmake 函数参考"
              },
              "items": [
                "kmpkg/maintainers/functions/kmpkg_acquire_msys",
                "kmpkg/maintainers/functions/kmpkg_add_to_path",
                "kmpkg/maintainers/functions/kmpkg_backup_env_variables",
                "kmpkg/maintainers/functions/kmpkg_build_make",
                "kmpkg/maintainers/functions/kmpkg_build_ninja",
                "kmpkg/maintainers/functions/kmpkg_build_nmake",
                "kmpkg/maintainers/functions/kmpkg_build_qmake",
                "kmpkg/maintainers/functions/kmpkg_buildpath_length_warning",
                "kmpkg/maintainers/functions/kmpkg_check_features",
                "kmpkg/maintainers/functions/kmpkg_check_linkage",
                "kmpkg/maintainers/functions/kmpkg_clean_executables_in_bin",
                "kmpkg/maintainers/functions/kmpkg_cmake_build",
                "kmpkg/maintainers/functions/kmpkg_cmake_config_fixup",
                "kmpkg/maintainers/functions/kmpkg_cmake_configure",
                "kmpkg/maintainers/functions/kmpkg_cmake_get_vars",
                "kmpkg/maintainers/functions/kmpkg_cmake_install",
                "kmpkg/maintainers/functions/kmpkg_configure_make",
                "kmpkg/maintainers/functions/kmpkg_configure_meson",
                "kmpkg/maintainers/functions/kmpkg_configure_qmake",
                "kmpkg/maintainers/functions/kmpkg_copy_pdbs",
                "kmpkg/maintainers/functions/kmpkg_copy_tool_dependencies",
                "kmpkg/maintainers/functions/kmpkg_copy_tools",
                "kmpkg/maintainers/functions/kmpkg_download_distfile",
                "kmpkg/maintainers/functions/kmpkg_download_sourceforge",
                "kmpkg/maintainers/functions/kmpkg_execute_build_process",
                "kmpkg/maintainers/functions/kmpkg_execute_in_download_mode",
                "kmpkg/maintainers/functions/kmpkg_execute_required_process",
                "kmpkg/maintainers/functions/kmpkg_execute_required_process_repeat",
                "kmpkg/maintainers/functions/kmpkg_extract_archive",
                "kmpkg/maintainers/functions/kmpkg_extract_source_archive",
                "kmpkg/maintainers/functions/kmpkg_find_acquire_program",
                "kmpkg/maintainers/functions/kmpkg_find_fortran",
                "kmpkg/maintainers/functions/kmpkg_fixup_pkgconfig",
                "kmpkg/maintainers/functions/kmpkg_from_bitbucket",
                "kmpkg/maintainers/functions/kmpkg_from_git",
                "kmpkg/maintainers/functions/kmpkg_from_github",
                "kmpkg/maintainers/functions/kmpkg_from_gitlab",
                "kmpkg/maintainers/functions/kmpkg_from_gitee",
                "kmpkg/maintainers/functions/kmpkg_from_sourceforge",
                "kmpkg/maintainers/functions/kmpkg_get_program_files_platform_bitness",
                "kmpkg/maintainers/functions/kmpkg_get_python_packages",
                "kmpkg/maintainers/functions/kmpkg_get_windows_sdk",
                "kmpkg/maintainers/functions/kmpkg_gn_configure",
                "kmpkg/maintainers/functions/kmpkg_gn_install",
                "kmpkg/maintainers/functions/kmpkg_host_path_list",
                "kmpkg/maintainers/functions/kmpkg_install_copyright",
                "kmpkg/maintainers/functions/kmpkg_install_make",
                "kmpkg/maintainers/functions/kmpkg_install_nmake",
                "kmpkg/maintainers/functions/kmpkg_install_qmake",
                "kmpkg/maintainers/functions/kmpkg_list",
                "kmpkg/maintainers/functions/kmpkg_minimum_required",
                "kmpkg/maintainers/functions/kmpkg_pkgconfig_get_modules",
                "kmpkg/maintainers/functions/kmpkg_qmake_build",
                "kmpkg/maintainers/functions/kmpkg_qmake_configure",
                "kmpkg/maintainers/functions/kmpkg_qmake_install",
                "kmpkg/maintainers/functions/kmpkg_replace_string",
                "kmpkg/maintainers/functions/internal/z_kmpkg_apply_patches",
                "kmpkg/maintainers/functions/internal/z_kmpkg_function_arguments",
                "kmpkg/maintainers/functions/internal/z_kmpkg_get_cmake_vars",
                "kmpkg/maintainers/functions/internal/z_kmpkg_prettify_command_line",
                "kmpkg/maintainers/functions/internal/z_kmpkg_restore_pkgconfig_path",
                "kmpkg/maintainers/functions/internal/z_kmpkg_setup_pkgconfig_path"
              ]
            },
            "kmpkg/reference/software-bill-of-materials",
            "kmpkg/users/triplets",
            "kmpkg/users/versioning"
          ]
        },
        {
          "type": "category",
          "label": "故障排查",
          "link": {
            "type": "generated-index",
            "title": "故障排查"
          },
          "items": [
            "kmpkg/troubleshoot/asset-caching",
            "kmpkg/users/binarycaching-troubleshooting",
            "kmpkg/troubleshoot/build-failures",
            "kmpkg/users/versioning-troubleshooting"
          ]
        },
        {
          "type": "category",
          "label": "命令行",
          "link": {
            "type": "generated-index",
            "title": "kmpkg documents"
          },
          "items": [
            "kmpkg/commands/common-options",
            "kmpkg/commands/add",
            "kmpkg/commands/add-version",
            "kmpkg/commands/create",
            "kmpkg/commands/depend-info",
            "kmpkg/commands/edit",
            "kmpkg/commands/env",
            "kmpkg/commands/export",
            "kmpkg/commands/format-manifest",
            "kmpkg/commands/hash",
            "kmpkg/commands/help",
            "kmpkg/commands/install",
            "kmpkg/commands/integrate",
            "kmpkg/commands/list",
            "kmpkg/commands/new",
            "kmpkg/commands/owns",
            "kmpkg/commands/remove",
            "kmpkg/commands/search",
            "kmpkg/commands/update",
            "kmpkg/commands/update-baseline",
            "kmpkg/commands/upgrade",
            "kmpkg/commands/version"
          ]
        },
        "kmpkg/concepts/glossary"
      ]
    },
    {
      "type": "category",
      "label": "服务端开发",
      "link": {
        "type": "generated-index",
        "title": "km inf",
        "description": "服务端弹性架构开发文档！",
        "keywords": [
          "EA",
          "服务端"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        "cpp/overview",
        {
          "type": "category",
          "label": "规范错误与错误返回值",
          "link": {
            "type": "generated-index",
            "description": "规范 Kumo 编码错误编码与返回值！",
            "title": "规范错误与错误返回值"
          },
          "items": [
            "cpp/base/status-codes",
            "cpp/base/status"
          ]
        },
        {
          "type": "category",
          "label": "性能测试与单元测试",
          "link": {
            "type": "generated-index",
            "description": "本系列文档默认读者已经具备一定的c++编程基础！",
            "title": "性能测试与单元测试"
          },
          "items": [
            "cpp/base/testing/overview",
            {
              "type": "category",
              "label": "doctest单元测试",
              "link": {
                "type": "generated-index",
                "description": "doctest单元测试",
                "title": "doctest单元测试"
              },
              "items": [
                "cpp/base/testing/doct/overview",
                "cpp/base/testing/doct/tutorial",
                "cpp/base/testing/doct/assertions",
                "cpp/base/testing/doct/testcases",
                "cpp/base/testing/doct/parameterized-tests",
                "cpp/base/testing/doct/logging",
                "cpp/base/testing/doct/commandline",
                "cpp/base/testing/doct/main",
                "cpp/base/testing/doct/configuration",
                "cpp/base/testing/doct/stringification",
                "cpp/base/testing/doct/reporters",
                "cpp/base/testing/doct/extensions",
                "cpp/base/testing/doct/faq",
                "cpp/base/testing/doct/build-systems",
                "cpp/base/testing/doct/benchmarks",
                "cpp/base/testing/doct/features"
              ]
            },
            {
              "type": "category",
              "label": "Kumo test",
              "link": {
                "type": "generated-index",
                "description": "Kumo test",
                "title": "Kumo test"
              },
              "items": [
                "cpp/base/testing/kt/quickstart",
                "cpp/base/testing/kt/primer",
                "cpp/base/testing/kt/reference/testing",
                "cpp/base/testing/kt/reference/assertions",
                "cpp/base/testing/kt/advanced",
                "cpp/base/testing/kt/samples",
                "cpp/base/testing/kt/faq",
                "cpp/base/testing/kt/kmock_for_dummies",
                "cpp/base/testing/kt/kmock_cook_book",
                "cpp/base/testing/kt/kmock_cheat_sheet",
                "cpp/base/testing/kt/kmock_faq"
              ]
            },
            "cpp/base/testing/benchmark"
          ]
        },
        {
          "type": "category",
          "label": "基础应用",
          "link": {
            "type": "generated-index",
            "description": "hash与hash容器",
            "title": "基础应用"
          },
          "items": [
            {
              "type": "category",
              "label": "命令行与配置",
              "link": {
                "type": "generated-index",
                "description": "本系列文档默认读者已经具备一定的c++编程基础！",
                "title": "命令行与配置"
              },
              "items": [
                "cpp/base/cmd/overview",
                "cpp/base/cmd/flags"
              ]
            },
            {
              "type": "category",
              "label": "hash容器",
              "link": {
                "type": "generated-index",
                "description": "本系列文档默认读者已经具备一定的c++编程基础！",
                "title": "hash容器"
              },
              "items": [
                "cpp/base/hash/overview",
                "cpp/base/hash/turbo_hash"
              ]
            },
            {
              "type": "category",
              "label": "字符与字符串",
              "link": {
                "type": "generated-index",
                "description": "本系列文档默认读者已经具备一定的c++编程基础！",
                "title": "字符与字符串"
              },
              "items": [
                "cpp/base/strings/fmt",
                "cpp/base/strings/split",
                "cpp/base/strings/strcat",
                "cpp/base/strings/join",
                "cpp/base/strings/substitution"
              ]
            },
            {
              "type": "category",
              "label": "文件格式与解析",
              "link": {
                "type": "generated-index",
                "description": "本系列文档默认读者已经具备一定的c++编程基础！",
                "title": "文件格式与解析"
              },
              "items": [
                "cpp/base/format/json",
                "cpp/base/format/toml",
                "cpp/base/format/ini"
              ]
            },
            "cpp/base/time/time"
          ]
        },
        {
          "type": "category",
          "label": "多核编程",
          "link": {
            "type": "generated-index",
            "description": "多线程以及竞态编程在生产环境中的实践！",
            "title": "多核编程"
          },
          "items": [
            "cpp/mc/atomic_danger"
          ]
        },
        {
          "type": "category",
          "label": "log日志库",
          "link": {
            "type": "generated-index",
            "description": "log 日志库教程文档!",
            "title": "log日志库"
          },
          "items": [
            {
              "type": "category",
              "label": "开始使用",
              "link": {
                "type": "generated-index",
                "description": "开始使用log！",
                "title": "使用log"
              },
              "items": [
                "cpp/klog/usage",
                "cpp/klog/build",
                "cpp/klog/packages"
              ]
            },
            {
              "type": "category",
              "label": "log教程",
              "link": {
                "type": "generated-index",
                "description": "log教程！",
                "title": "log教程"
              },
              "items": [
                "cpp/klog/logging",
                "cpp/klog/sinks",
                "cpp/klog/builtin_sinks",
                "cpp/klog/flags"
              ]
            }

          ]
        },
        {
          "type": "category",
          "label": "krpc教程",
          "link": {
            "type": "generated-index",
            "title": "krpc教程"
          },
          "items": [
            "cpp/krpc/getting_started",
            "cpp/krpc/server",
            "cpp/krpc/http_service",
            "cpp/krpc/thrift",
            "cpp/krpc/cpu_profiler",
            "cpp/krpc/heap_profiler",
            "cpp/krpc/contention_profiler",
            "cpp/krpc/dummy_server",
            "cpp/krpc/rpcz",
            "cpp/krpc/thread_local",
            "cpp/krpc/json2pb",
            "cpp/krpc/threading_overview",
            "cpp/krpc/atomic_instructions",
            "cpp/krpc/flags",
            "cpp/krpc/io",
            "cpp/krpc/vars",
            "cpp/krpc/kvar",
            "cpp/krpc/kvar_c++",
            "cpp/krpc/mkvar_c++",
            "cpp/krpc/streaming_rpc",
            "cpp/krpc/endpoint",
            "cpp/krpc/kumo_std",
            "cpp/krpc/client",
            "cpp/krpc/circuit_breaker",
            "cpp/krpc/connections",
            "cpp/krpc/lalb",
            "cpp/krpc/consistent_hashing",
            "cpp/krpc/http_client",
            "cpp/krpc/http_derivatives",
            "cpp/krpc/combo_channel",
            "cpp/krpc/kthread",
            "cpp/krpc/kthread_or_not",
            "cpp/krpc/execution_queue",
            "cpp/krpc/memcache_client",
            "cpp/krpc/redis_client",
            "cpp/krpc/auto_concurrency_limiter",
            "cpp/krpc/server_debugging"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "搜索应用开发",
      "link": {
        "type": "generated-index",
        "title": "搜索开发",
        "description": "搜索应用开发开发使用教程!",
        "keywords": [
          "search",
          "kmsearch"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        {
          "type": "category",
          "label": "概述",
          "link": {
            "type": "generated-index",
            "title": "概述"
          },
          "items": [
            "kmsearch/overview/what-is-kumosearch",
            "kmsearch/overview/why-kumosearch",
            "kmsearch/overview/features",
            "kmsearch/overview/comparison-with-alternatives",
            "kmsearch/overview/benchmarks",
            "kmsearch/overview/use-cases",
            "kmsearch/overview/demos"
          ]
        },
        {
          "type": "category",
          "label": "快速开始",
          "link": {
            "type": "generated-index",
            "title": "快速开始"
          },
          "items": [
            "kmsearch/install-kumosearch",
            "kmsearch/installing-a-client",
            "kmsearch/building-a-search-application",
            "kmsearch/search-ui-components"
          ]
        },
        {
          "type": "category",
          "label": "系统配置",
          "link": {
            "type": "generated-index",
            "title": "系统配置"
          },
          "items": [
            "kmsearch/system-requirements",
            "kmsearch/high-availability",
            "kmsearch/updating-kumosearch",
            "kmsearch/backups"
          ]
        },
        {
          "type": "category",
          "label": "管理数据",
          "link": {
            "type": "generated-index",
            "title": "管理数据"
          },
          "items": [
            "kmsearch/organizing-collections",
            "kmsearch/syncing-data-into-kumosearch",
            "kmsearch/data-access-control"
          ]
        },
        {
          "type": "category",
          "label": "最佳实践",
          "link": {
            "type": "generated-index",
            "title": "最佳实践"
          },
          "items": [
            "kmsearch/ranking-and-relevance",
            "kmsearch/tips-for-searching-common-types-of-data",
            "kmsearch/running-in-production"
          ]
        },
        {
          "type": "category",
          "label": "提升搜索体验",
          "link": {
            "type": "generated-index",
            "title": "提升搜索体验"
          },
          "items": [
            "kmsearch/search-analytics",
            "kmsearch/semantic-search",
            "kmsearch/recommendations",
            "kmsearch/personalization",
            "kmsearch/ab-testing",
            "kmsearch/query-suggestions",
            "kmsearch/docker-swarm-high-availability"
          ]
        },
        "kmsearch/faqs"
      ]
    },
    {
      "type": "category",
      "label": "向量数据库教程",
      "link": {
        "type": "generated-index",
        "title": "向量数据库",
        "description": "kmvector数据库开发教程!",
        "keywords": [
          "kmvector",
          "kdb"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        {
          "type": "category",
          "label": "快速开始",
          "link": {
            "type": "generated-index",
            "title": "安装"
          },
          "items": [
            "kmvector/overview",
            "kmvector/install"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "分布式数据库",
      "link": {
        "type": "generated-index",
        "title": "分布式数据库",
        "description": "分布式数据库使用教程!",
        "keywords": [
          "kumodb",
          "kdb"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        {
          "type": "category",
          "label": "快速开始",
          "link": {
            "type": "generated-index",
            "title": "安装"
          },
          "items": [
            "kdb/overview",
            "kdb/install"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "搜索统一执行引擎",
      "link": {
        "type": "generated-index",
        "title": "搜索统一执行引擎",
        "description": "搜索统一执行引擎教程!",
        "keywords": [
          "pollux",
          "kmsearch"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        "pollux/overview"
      ]
    },
    {
      "type": "category",
      "label": "搜索 UI",
      "link": {
        "type": "generated-index",
        "title": "搜索 UI",
        "description": "搜索 UI 开发教程!",
        "keywords": [
          "UI",
          "ui",
          "kumoui"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        {
          "type": "category",
          "label": "快速开始",
          "link": {
            "type": "generated-index",
            "title": "快速开始"
          },
          "items": [
            "kumoui/overview",
            "kumoui/install"
          ]
        }
      ]
    }
  ],
  "api": [
    {
      "type": "category",
      "label": "kmsearch",
      "link": {
        "type": "generated-index",
        "title": "kmsearch API",
        "description": "kmsearch API",
        "keywords": [
          "kmsearch"
        ],
        "image": "/img/favicon.png"
      },
      "items": [
        "api/kmsearch/server-configuration",
        "api/kmsearch/api-clients",
        "api/kmsearch/authentication",
        {
          "type": "category",
          "label": "API 参考",
          "link": {
            "type": "generated-index",
            "title": "API 参考",
            "description": "kumosearch API 参考",
            "keywords": [
              "kumosearch",
              "api"
            ],
            "image": "/img/favicon.png"
          },
          "items": [
            "api/kmsearch/collections",
            "api/kmsearch/documents",
            "api/kmsearch/search_api",
            "api/kmsearch/vector-search",
            "api/kmsearch/federated-multi-search",
            "api/kmsearch/voice-search-query",
            "api/kmsearch/image-search",
            "api/kmsearch/conversational-search-rag",
            "api/kmsearch/geosearch",
            "api/kmsearch/collection-alias",
            "api/kmsearch/synonyms",
            "api/kmsearch/stopwords",
            "api/kmsearch/joins",
            "api/kmsearch/analytics-query-suggestions",
            "api/kmsearch/curation",
            "api/kmsearch/api-keys",
            "api/kmsearch/cluster-operations",
            "api/kmsearch/api-errors"
          ]
        }
      ]
    }
  ]
};

export default sidebars;
