// Awesome Nokia - Search Card Target Focus & Strict Curated Search Engine
(function () {
  'use strict';

  // Strip any ?h= query parameter and remove text highlights
  function stripHighlightParam() {
    try {
      if (window.location.search && window.location.search.includes('h=')) {
        var url = new URL(window.location.href);
        url.searchParams.delete('h');
        window.history.replaceState(null, '', url.pathname + (url.search || '') + url.hash);
      }
      var marks = document.querySelectorAll('mark[data-md-highlight]');
      for (var i = 0; i < marks.length; i++) {
        var m = marks[i];
        var parent = m.parentNode;
        if (parent) {
          while (m.firstChild) parent.insertBefore(m.firstChild, m);
          parent.removeChild(m);
        }
      }
    } catch (e) {
      // Ignore
    }
  }

  function highlightTargetCard() {
    stripHighlightParam();
    var hash = window.location.hash;
    // Clear any previous focus
    document.querySelectorAll('.card-target-focus').forEach(function (el) {
      el.classList.remove('card-target-focus');
    });

    if (!hash || hash.length <= 1) return;

    try {
      var targetId = decodeURIComponent(hash.slice(1));
      var targetEl = document.getElementById(targetId);
      if (targetEl) {
        var card = targetEl.closest('li');
        if (card) {
          card.classList.add('card-target-focus');
          // Smoothly scroll the card into view, vertically centered
          setTimeout(function () {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 80);
        }
      }
    } catch (e) {
      // Ignore invalid selector / hash
    }
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightTargetCard);
  } else {
    highlightTargetCard();
  }

  // Run on hash changes (e.g., clicking search results or browser navigation)
  window.addEventListener('hashchange', highlightTargetCard);

  // Material for MkDocs / Zensical instant navigation hook
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      highlightTargetCard();
    });
  }
  document.addEventListener('DOMContentSwitch', highlightTargetCard);

  // ========================================================
  // STRICT CURATED CARDS SEARCH DATASET (65 Resources)
  // ========================================================
  var CURATED_CARDS = [
  {
    "id": "clab-core",
    "title": "Containerlab",
    "cat": "Containerlab",
    "href": "containerlab/#clab-core",
    "desc": "Open-source virtual network lab orchestrator for containers and virtual machines.",
    "tags": [
      "#lab",
      "#orchestration",
      "#containers",
      "#cli",
      "#official"
    ]
  },
  {
    "id": "clab-gui",
    "title": "Containerlab GUI",
    "cat": "Containerlab",
    "href": "containerlab/#clab-gui",
    "desc": "GUI for Containerlab available as a VS Code extension, desktop app, self-hosted web app, or browser sandbox.",
    "tags": [
      "#gui",
      "#vscode",
      "#ui",
      "#lab",
      "#official"
    ]
  },
  {
    "id": "antimony",
    "title": "Antimony",
    "cat": "Containerlab",
    "href": "containerlab/#antimony",
    "desc": "Alternative GUI and lab manager focused on educational environments created at Eastern Switzerland University of Applied Sciences.",
    "tags": [
      "#gui",
      "#lab",
      "#education",
      "#community"
    ]
  },
  {
    "id": "vrnetlab",
    "title": "vrnetlab",
    "cat": "Containerlab",
    "href": "containerlab/#vrnetlab",
    "desc": "Tool to convert VM-based network device images into Containerlab-compatible containers.",
    "tags": [
      "#containers",
      "#lab",
      "#vm",
      "#official"
    ]
  },
  {
    "id": "clabernetes",
    "title": "Clabernetes",
    "cat": "Containerlab",
    "href": "containerlab/#clabernetes",
    "desc": "Containerlab in Kubernetes allowing distributed, scale-out network labs.",
    "tags": [
      "#kubernetes",
      "#cloud",
      "#lab",
      "#scale",
      "#official"
    ]
  },
  {
    "id": "clab-wsl",
    "title": "WSL Containerlab",
    "cat": "Containerlab",
    "href": "containerlab/#clab-wsl",
    "desc": "Ready-to-use Windows Subsystem for Linux (WSL2) distribution that makes network labbing with Containerlab and Docker seamless on Windows 10 and 11.",
    "tags": [
      "#containerlab",
      "#wsl",
      "#windows",
      "#lab",
      "#official"
    ]
  },
  {
    "id": "clab-discord",
    "title": "Containerlab Discord",
    "cat": "Containerlab",
    "href": "containerlab/#clab-discord",
    "desc": "Official Containerlab community chat server for questions, announcements, and lab discussions.",
    "tags": [
      "#community",
      "#chat",
      "#support"
    ]
  },
  {
    "id": "srl-lab-container",
    "title": "SR Linux Lab Container",
    "cat": "SR Linux",
    "href": "srlinux/#srl-lab-container",
    "desc": "Virtual SR Linux node container image for lab testing, automation experiments, and development.",
    "tags": [
      "#lab",
      "#srlinux",
      "#containers",
      "#official"
    ]
  },
  {
    "id": "srl-pydantic",
    "title": "Pydantic Models for SR Linux",
    "cat": "SR Linux",
    "href": "srlinux/#srl-pydantic",
    "desc": "Generate Python Pydantic validation models for SR Linux configuration and telemetry paths.",
    "tags": [
      "#python",
      "#pydantic",
      "#validation",
      "#automation"
    ]
  },
  {
    "id": "srl-yang-browser",
    "title": "SR Linux YANG Browser",
    "cat": "SR Linux",
    "href": "srlinux/#srl-yang-browser",
    "desc": "Searchable database and interactive schema browser of all SR Linux model paths (gNMI, JSON, etc.).",
    "tags": [
      "#yang",
      "#browser",
      "#gnmi",
      "#tooling",
      "#official"
    ]
  },
  {
    "id": "srl-vscode-lsp",
    "title": "VS Code Language Server for SR Linux & SROS",
    "cat": "SR Linux",
    "href": "srlinux/#srl-vscode-lsp",
    "desc": "Advanced auto-completion, linting, and schema validation for SR Linux and SROS configuration files.",
    "tags": [
      "#vscode",
      "#schema",
      "#lsp",
      "#ide",
      "#srlinux",
      "#sros"
    ]
  },
  {
    "id": "srl-multicli",
    "title": "MultiCLI",
    "cat": "SR Linux",
    "href": "srlinux/#srl-multicli",
    "desc": "CLI plugin emulating common commands of other vendor NOSes to ease operator migration to SR Linux.",
    "tags": [
      "#cli",
      "#migration",
      "#plugin",
      "#nos"
    ]
  },
  {
    "id": "srl-gpt",
    "title": "SR Linux GPT",
    "cat": "SR Linux",
    "href": "srlinux/#srl-gpt",
    "desc": "Application integrating OpenAI ChatGPT as an AI assistant agent directly into the SR Linux command line.",
    "tags": [
      "#ai",
      "#chatgpt",
      "#cli",
      "#llm"
    ]
  },
  {
    "id": "srl-frontpanel",
    "title": "Front Panel CLI Plugin",
    "cat": "SR Linux",
    "href": "srlinux/#srl-frontpanel",
    "desc": "Visual ASCII/graphical representation of switch front panel and port statuses directly in the terminal.",
    "tags": [
      "#cli",
      "#ui",
      "#tui",
      "#hardware"
    ]
  },
  {
    "id": "srl-conversion-tool",
    "title": "SR Linux Conversion Tool (srlconv)",
    "cat": "SR Linux",
    "href": "srlinux/#srl-conversion-tool",
    "desc": "Convert configurations between software versions and compare syntax representations seamlessly.",
    "tags": [
      "#cli",
      "#migration",
      "#conversion",
      "#config"
    ]
  },
  {
    "id": "srl-custom-snmp",
    "title": "Custom SNMP Framework",
    "cat": "SR Linux",
    "href": "srlinux/#srl-custom-snmp",
    "desc": "Comprehensive guide and developer framework for creating custom SNMP MIBs in SR Linux.",
    "tags": [
      "#snmp",
      "#monitoring",
      "#telemetry",
      "#guide"
    ]
  },
  {
    "id": "srl-ansible-collections",
    "title": "SR Linux Ansible Collections",
    "cat": "SR Linux",
    "href": "srlinux/#srl-ansible-collections",
    "desc": "Official Ansible modules and plugins for automating SR Linux network configuration and state verification.",
    "tags": [
      "#ansible",
      "#automation",
      "#devops",
      "#official"
    ]
  },
  {
    "id": "srl-skills",
    "title": "Nokia SR Skills",
    "cat": "SR Linux",
    "href": "srlinux/#srl-skills",
    "desc": "Claude Skill plugin teaching LLM agents how to inspect and operate Nokia SR Linux and SROS devices.",
    "tags": [
      "#ai",
      "#claude",
      "#agents",
      "#automation",
      "#srlinux",
      "#sros"
    ]
  },
  {
    "id": "srl-yang-models",
    "title": "SR Linux YANG Models",
    "cat": "SR Linux",
    "href": "srlinux/#srl-yang-models",
    "desc": "Public repository of all standard and vendor-augmented Nokia SR Linux YANG models.",
    "tags": [
      "#yang",
      "#schema",
      "#official"
    ]
  },
  {
    "id": "srl-napalm",
    "title": "NAPALM SR Linux",
    "cat": "SR Linux",
    "href": "srlinux/#srl-napalm",
    "desc": "Community-maintained NAPALM network automation driver for SR Linux devices.",
    "tags": [
      "#napalm",
      "#python",
      "#automation",
      "#community"
    ]
  },
  {
    "id": "srl-ndk",
    "title": "SR Linux NDK",
    "cat": "SR Linux",
    "href": "srlinux/#srl-ndk",
    "desc": "Official development framework and SDKs for programming high-performance, on-box custom C++, Go, and Python agents and CLI plugins on Nokia SR Linux.",
    "tags": [
      "#ndk",
      "#sdk",
      "#srlinux",
      "#development",
      "#official"
    ]
  },
  {
    "id": "srl-fcli",
    "title": "fcli",
    "cat": "SR Linux",
    "href": "srlinux/#srl-fcli",
    "desc": "Fabric observability tool for Nokia SR Linux fabrics, providing a real-time web UI, terminal CLI reports, and an MCP server for AI coding assistants over gNMI.",
    "tags": [
      "#observability",
      "#gnmi",
      "#srlinux",
      "#mcp",
      "#cli"
    ]
  },
  {
    "id": "srl-discord",
    "title": "SR Linux Discord Community",
    "cat": "SR Linux",
    "href": "srlinux/#srl-discord",
    "desc": "Official community chat for SR Linux and SROS network engineers, developers, and architects.",
    "tags": [
      "#community",
      "#chat",
      "#support"
    ]
  },
  {
    "id": "eda-core",
    "title": "Nokia EDA",
    "cat": "EDA",
    "href": "eda/#eda-core",
    "desc": "Nokia's event-driven automation network orchestrator.",
    "tags": [
      "#eda",
      "#automation",
      "#orchestration",
      "#official"
    ]
  },
  {
    "id": "eda-playground",
    "title": "Try-EDA Playground",
    "cat": "EDA",
    "href": "eda/#eda-playground",
    "desc": "Run Nokia Event-Driven Automation locally for free in lightweight virtualized environments.",
    "tags": [
      "#eda",
      "#lab",
      "#playground",
      "#k8s",
      "#official"
    ]
  },
  {
    "id": "eda-codespaces",
    "title": "CodeSpaces Playground for EDA",
    "cat": "EDA",
    "href": "eda/#eda-codespaces",
    "desc": "Run full Nokia EDA for free in the cloud using GitHub CodeSpaces with zero local installation.",
    "tags": [
      "#eda",
      "#codespaces",
      "#cloud",
      "#playground",
      "#official"
    ]
  },
  {
    "id": "eda-vscode-extension",
    "title": "EDA VS Code Extension",
    "cat": "EDA",
    "href": "eda/#eda-vscode-extension",
    "desc": "Visual Studio Code extension for reading and writing EDA configuration, intents, and runtime state.",
    "tags": [
      "#vscode",
      "#eda",
      "#ide",
      "#extension",
      "#official"
    ]
  },
  {
    "id": "eda-topobuilder",
    "title": "TopoBuilder for EDA",
    "cat": "EDA",
    "href": "eda/#eda-topobuilder",
    "desc": "Interactive web application for designing topologies and importing them into EDA workflows.",
    "tags": [
      "#eda",
      "#topology",
      "#ui",
      "#tooling"
    ]
  },
  {
    "id": "eda-resource-browser-community",
    "title": "EDA Resource Browser (Community)",
    "cat": "EDA",
    "href": "eda/#eda-resource-browser-community",
    "desc": "Visualize, browse, and compare EDA custom resource definitions (CRDs) with rich search and diffing.",
    "tags": [
      "#eda",
      "#crd",
      "#browser",
      "#ui",
      "#community"
    ]
  },
  {
    "id": "eda-image-manager",
    "title": "EDA Image Manager",
    "cat": "EDA",
    "href": "eda/#eda-image-manager",
    "desc": "Simplify managing switch and node firmware images when operating EDA in lab and test environments.",
    "tags": [
      "#eda",
      "#images",
      "#firmware",
      "#lab",
      "#community"
    ]
  },
  {
    "id": "eda-resource-browser-official",
    "title": "Nokia EDA Resource Browser",
    "cat": "EDA",
    "href": "eda/#eda-resource-browser-official",
    "desc": "Official web-based custom resource definition (CRD) browser maintained directly by Nokia EDA team.",
    "tags": [
      "#eda",
      "#crd",
      "#browser",
      "#official"
    ]
  },
  {
    "id": "eda-pydantic",
    "title": "Pydantic Models for EDA",
    "cat": "EDA",
    "href": "eda/#eda-pydantic",
    "desc": "Generate Python Pydantic validation models and typings for EDA Kubernetes custom resources.",
    "tags": [
      "#pydantic",
      "#python",
      "#eda",
      "#validation"
    ]
  },
  {
    "id": "eda-ansible-collections",
    "title": "EDA Ansible Collections",
    "cat": "EDA",
    "href": "eda/#eda-ansible-collections",
    "desc": "Ansible modules and roles for declaring, deploying, and managing Nokia EDA fabric operations.",
    "tags": [
      "#ansible",
      "#eda",
      "#automation",
      "#devops"
    ]
  },
  {
    "id": "eda-terraform",
    "title": "EDA Terraform Providers",
    "cat": "EDA",
    "href": "eda/#eda-terraform",
    "desc": "Official Terraform and OpenTofu provider for Nokia EDA infrastructure as code (IaC) workflows.",
    "tags": [
      "#terraform",
      "#iac",
      "#eda",
      "#cloud"
    ]
  },
  {
    "id": "eda-discord",
    "title": "EDA Discord Community",
    "cat": "EDA",
    "href": "eda/#eda-discord",
    "desc": "Official community chat for Nokia EDA operators, developers, and automation specialists.",
    "tags": [
      "#community",
      "#chat",
      "#support"
    ]
  },
  {
    "id": "nsp-telemetry-pipelines",
    "title": "NSP Telemetry Pipelines",
    "cat": "NSP",
    "href": "nsp/#nsp-telemetry-pipelines",
    "desc": "Modular proof-of-concept telemetry pipelines and stream processing scenarios built for Nokia NSP.",
    "tags": [
      "#nsp",
      "#telemetry",
      "#kafka",
      "#pipelines",
      "#monitoring"
    ]
  },
  {
    "id": "nsp-ansible-collection",
    "title": "NSP Ansible Collection",
    "cat": "NSP",
    "href": "nsp/#nsp-ansible-collection",
    "desc": "Ansible collection for orchestrating Nokia Network Services Platform via standard RESTCONF APIs.",
    "tags": [
      "#nsp",
      "#ansible",
      "#restconf",
      "#automation"
    ]
  },
  {
    "id": "nsp-vscode-wfm",
    "title": "VSCode Workflow Manager Plugin",
    "cat": "NSP",
    "href": "nsp/#nsp-vscode-wfm",
    "desc": "VS Code plugin for authoring, editing, linting, and managing NSP Workflow Manager (WFM) workflows.",
    "tags": [
      "#nsp",
      "#vscode",
      "#workflows",
      "#ide"
    ]
  },
  {
    "id": "nsp-vscode-intent",
    "title": "VSCode Intent Manager Plugin",
    "cat": "NSP",
    "href": "nsp/#nsp-vscode-intent",
    "desc": "Visual Studio Code plugin for creating, debugging, and testing NSP Intent Manager models and intent types.",
    "tags": [
      "#nsp",
      "#vscode",
      "#intents",
      "#ide"
    ]
  },
  {
    "id": "nsp-automation-examples",
    "title": "NSP Automation Examples",
    "cat": "NSP",
    "href": "nsp/#nsp-automation-examples",
    "desc": "Curated collection of programmable workflows, scripts, and intent-type examples for Nokia NSP.",
    "tags": [
      "#nsp",
      "#automation",
      "#examples",
      "#workflows",
      "#intents"
    ]
  },
  {
    "id": "sros-srsim-container",
    "title": "SR-SIM Lab Container",
    "cat": "SROS",
    "href": "sros/#sros-srsim-container",
    "desc": "Virtual SROS (7x50) container node for simulated lab use (requires Nokia Support or Sales portal access).",
    "tags": [
      "#sros",
      "#lab",
      "#simulation",
      "#containers",
      "#official"
    ]
  },
  {
    "id": "sros-srsim-hw-schema",
    "title": "SR-SIM HW Schema App",
    "cat": "SROS",
    "href": "sros/#sros-srsim-hw-schema",
    "desc": "Web utility to generate and validate Containerlab hardware configurations and card slot models for SR-SIM nodes.",
    "tags": [
      "#sros",
      "#containerlab",
      "#hardware",
      "#schema",
      "#community"
    ]
  },
  {
    "id": "sros-vscode-lsp",
    "title": "VS Code Language Server (SROS)",
    "cat": "SROS",
    "href": "sros/#sros-vscode-lsp",
    "desc": "Intelligent auto-completion and schema validation for Nokia SROS and SR Linux configuration syntaxes.",
    "tags": [
      "#vscode",
      "#schema",
      "#sros",
      "#srlinux",
      "#ide"
    ]
  },
  {
    "id": "sros-yang-browser",
    "title": "SROS YANG Browser",
    "cat": "SROS",
    "href": "sros/#sros-yang-browser",
    "desc": "Interactive searchable database and tree navigator of all Nokia SROS YANG model paths and leaf attributes.",
    "tags": [
      "#yang",
      "#sros",
      "#browser",
      "#official"
    ]
  },
  {
    "id": "sros-pysros",
    "title": "pySROS Python Library",
    "cat": "SROS",
    "href": "sros/#sros-pysros",
    "desc": "Official model-driven Python client library for programmatically interacting with Nokia 7x50 SROS routers.",
    "tags": [
      "#python",
      "#sros",
      "#api",
      "#automation",
      "#official"
    ]
  },
  {
    "id": "sros-ebooks",
    "title": "SROS Technical eBooks",
    "cat": "SROS",
    "href": "sros/#sros-ebooks",
    "desc": "Free technical eBooks covering SROS architectures, protocols, advanced routing, and service design.",
    "tags": [
      "#sros",
      "#books",
      "#documentation",
      "#learning"
    ]
  },
  {
    "id": "sros-ansible-collections",
    "title": "SROS Ansible Collections",
    "cat": "SROS",
    "href": "sros/#sros-ansible-collections",
    "desc": "Official Ansible modules for configuration deployment, audit, and operational tasks on Nokia SROS.",
    "tags": [
      "#ansible",
      "#sros",
      "#automation",
      "#devops"
    ]
  },
  {
    "id": "sros-skills",
    "title": "Nokia SR Skills for AI Agents",
    "cat": "SROS",
    "href": "sros/#sros-skills",
    "desc": "Claude Skill plugin teaching LLM agents how to inspect, query, and operate Nokia SROS & SR Linux devices.",
    "tags": [
      "#ai",
      "#claude",
      "#agents",
      "#sros",
      "#srlinux"
    ]
  },
  {
    "id": "sros-yang-models",
    "title": "SROS YANG Models Repository",
    "cat": "SROS",
    "href": "sros/#sros-yang-models",
    "desc": "Complete official repository of all Nokia 7x50 SROS YANG models across major releases.",
    "tags": [
      "#yang",
      "#sros",
      "#schema",
      "#official"
    ]
  },
  {
    "id": "sros-napalm",
    "title": "NAPALM SROS Driver",
    "cat": "SROS",
    "href": "sros/#sros-napalm",
    "desc": "Community NAPALM driver allowing multi-vendor automation scripts to control Nokia SROS nodes.",
    "tags": [
      "#napalm",
      "#python",
      "#sros",
      "#automation",
      "#community"
    ]
  },
  {
    "id": "sros-discord",
    "title": "SROS Community Discord",
    "cat": "SROS",
    "href": "sros/#sros-discord",
    "desc": "Dedicated SROS channels within the official SR Linux Discord community server.",
    "tags": [
      "#community",
      "#chat",
      "#support"
    ]
  },
  {
    "id": "gen-network-design-hub",
    "title": "Network Design Hub",
    "cat": "Networking",
    "href": "networking/#gen-network-design-hub",
    "desc": "Nokia Validated Designs (NVD) and reference architectures for data center, IP/MPLS, and optical networks.",
    "tags": [
      "#design",
      "#architecture",
      "#reference",
      "#official"
    ]
  },
  {
    "id": "gen-ai-network-calculator",
    "title": "AI Network Calculator",
    "cat": "Networking",
    "href": "networking/#gen-ai-network-calculator",
    "desc": "Interactive calculator for designing and sizing 2-tier GPU fabrics, rail-optimized networks, and leaf-spine switches.",
    "tags": [
      "#ai",
      "#calculator",
      "#gpu",
      "#datacenter",
      "#fabric"
    ]
  },
  {
    "id": "gen-protomap",
    "title": "ProtoMap",
    "cat": "Networking",
    "href": "networking/#gen-protomap",
    "desc": "Interactive visualizer for gNMI, gNOI, gNSI, and gRIBI protobuf service specifications and RPC interfaces.",
    "tags": [
      "#gnmi",
      "#gnoi",
      "#proto",
      "#visualizer",
      "#telemetry"
    ]
  },
  {
    "id": "gen-gnmic",
    "title": "gNMIc",
    "cat": "Networking",
    "href": "networking/#gen-gnmic",
    "desc": "Fast, full-featured gNMI CLI client and telemetry collector created by Nokia with multi-target streaming.",
    "tags": [
      "#gnmi",
      "#telemetry",
      "#cli",
      "#collector",
      "#official"
    ]
  },
  {
    "id": "gen-gnmic-operator",
    "title": "gNMIc Operator",
    "cat": "Networking",
    "href": "networking/#gen-gnmic-operator",
    "desc": "Kubernetes operator to deploy, scale, and manage gNMIc telemetry collector clusters dynamically.",
    "tags": [
      "#kubernetes",
      "#gnmi",
      "#operator",
      "#telemetry",
      "#official"
    ]
  },
  {
    "id": "gen-raven",
    "title": "RAVEN",
    "cat": "Networking",
    "href": "networking/#gen-raven",
    "desc": "Single-binary BGP routing security observability tool by Nokia that connects to routers via BMP, validates routes against RPKI ROV and ASPA in real time, and exports metrics.",
    "tags": [
      "#bgp",
      "#security",
      "#rpki",
      "#bmp",
      "#official"
    ]
  },
  {
    "id": "gen-netconf-vscode",
    "title": "NETCONF VS Code Extension",
    "cat": "Networking",
    "href": "networking/#gen-netconf-vscode",
    "desc": "Full-featured NETCONF client built for VS Code with RPC execution, filter testing, and session management.",
    "tags": [
      "#netconf",
      "#vscode",
      "#ide",
      "#extension",
      "#official"
    ]
  },
  {
    "id": "gen-netlab",
    "title": "Netlab",
    "cat": "Networking",
    "href": "networking/#gen-netlab",
    "desc": "Multi-vendor network lab virtualization tool with deep support for SR Linux, SROS, and automated protocol configs.",
    "tags": [
      "#lab",
      "#multivendor",
      "#automation",
      "#python",
      "#community"
    ]
  },
  {
    "id": "gen-robot-framework",
    "title": "Robot Framework",
    "cat": "Networking",
    "href": "networking/#gen-robot-framework",
    "desc": "Generic open source automation framework for acceptance testing and RPA originally founded at Nokia.",
    "tags": [
      "#testing",
      "#automation",
      "#robot-framework",
      "#python",
      "#official"
    ]
  },
  {
    "id": "gen-kubenet",
    "title": "Kubenet",
    "cat": "Networking",
    "href": "networking/#gen-kubenet",
    "desc": "Open source community initiatives leveraging Kubernetes primitives and controllers for network automation.",
    "tags": [
      "#kubernetes",
      "#automation",
      "#cloud-native",
      "#community"
    ]
  },
  {
    "id": "gen-scrapli",
    "title": "Scrapli",
    "cat": "Networking",
    "href": "networking/#gen-scrapli",
    "desc": "Fast, async-capable Python/Go network connection and automation library supporting SR Linux and SROS.",
    "tags": [
      "#python",
      "#async",
      "#automation",
      "#ssh",
      "#community"
    ]
  },
  {
    "id": "gen-netmiko",
    "title": "Netmiko",
    "cat": "Networking",
    "href": "networking/#gen-netmiko",
    "desc": "Multi-vendor Python SSH automation library with first-class support for Nokia SR Linux and SROS devices.",
    "tags": [
      "#python",
      "#automation",
      "#ssh",
      "#multivendor",
      "#community"
    ]
  },
  {
    "id": "gen-app-muxus",
    "title": "Muxus",
    "cat": "Apps",
    "href": "apps/#gen-app-muxus",
    "desc": "Free, open-source SSH, Telnet, and serial terminal client with split panes, saved workspaces, and remote editor.",
    "tags": [
      "#ssh",
      "#terminal",
      "#workspace",
      "#gui",
      "#community"
    ]
  },
  {
    "id": "gen-app-kubus",
    "title": "Kubus",
    "cat": "Apps",
    "href": "apps/#gen-app-kubus",
    "desc": "Free, fast, open-source desktop Kubernetes GUI for inspecting pods, CRDs, clusters, and logs.",
    "tags": [
      "#kubernetes",
      "#gui",
      "#devops",
      "#community"
    ]
  }
];

  // Top 12 curated featured projects
  var FEATURED_PROJECTS = [
  {
    "title": "Containerlab",
    "cat": "Containerlab",
    "href": "containerlab/#clab-core",
    "desc": "Open-source virtual network lab orchestrator for containers and virtual machines.",
    "tags": [
      "#lab",
      "#orchestration",
      "#official"
    ]
  },
  {
    "title": "Nokia EDA",
    "cat": "EDA",
    "href": "eda/#eda-core",
    "desc": "Kubernetes-native event-driven automation platform for data center fabric operations.",
    "tags": [
      "#eda",
      "#automation",
      "#k8s"
    ]
  },
  {
    "title": "Clabernetes",
    "cat": "Containerlab",
    "href": "containerlab/#clabernetes",
    "desc": "Containerlab in Kubernetes allowing distributed, scale-out network labs.",
    "tags": [
      "#kubernetes",
      "#cloud",
      "#official"
    ]
  },
  {
    "title": "TopoBuilder for EDA",
    "cat": "EDA",
    "href": "eda/#eda-topobuilder",
    "desc": "Tool to design, visualize, and generate EDA fabric topology definitions.",
    "tags": [
      "#topology",
      "#eda",
      "#ui"
    ]
  },
  {
    "title": "gNMIc",
    "cat": "General Networking",
    "href": "networking/#gen-gnmic",
    "desc": "Open source gNMI CLI client and collector with full SR Linux and SROS telemetry support.",
    "tags": [
      "#telemetry",
      "#gnmi",
      "#official"
    ]
  },
  {
    "title": "Try-EDA Playground",
    "cat": "EDA",
    "href": "eda/#eda-playground",
    "desc": "Interactive browser-based hands-on sandbox for experiencing Nokia Event-Driven Automation without local setup.",
    "tags": [
      "#eda",
      "#playground",
      "#sandbox"
    ]
  },
  {
    "title": "Netlab",
    "cat": "General Networking",
    "href": "networking/#gen-netlab",
    "desc": "Network automation tool creating topology diagrams and provisioning lab environments using Containerlab.",
    "tags": [
      "#lab",
      "#topology"
    ]
  },
  {
    "title": "SR Linux NDK",
    "cat": "SR Linux",
    "href": "srlinux/#srl-ndk",
    "desc": "Official development framework and SDKs for programming high-performance, on-box custom C++, Go, and Python agents and CLI plugins on Nokia SR Linux.",
    "tags": [
      "#ndk",
      "#development",
      "#sdk",
      "#official"
    ]
  },
  {
    "title": "NSP Automation Examples",
    "cat": "NSP",
    "href": "nsp/#nsp-automation-examples",
    "desc": "Production-ready Python scripts and Postman collections for automating Nokia NSP via REST and Kafka.",
    "tags": [
      "#automation",
      "#python",
      "#rest",
      "#official"
    ]
  },
  {
    "title": "pySROS Python Library",
    "cat": "SROS",
    "href": "sros/#sros-pysros",
    "desc": "Python client library for model-driven management and automation of Nokia SROS routers.",
    "tags": [
      "#sros",
      "#python",
      "#automation",
      "#official"
    ]
  },
  {
    "title": "RAVEN",
    "cat": "General Networking",
    "href": "networking/#gen-raven",
    "desc": "BGP Routing Security Monitor & BMP observability engine with native support for Nokia SROS and SR Linux routers.",
    "tags": [
      "#bgp",
      "#security",
      "#bmp",
      "#official"
    ]
  },
  {
    "title": "Muxus",
    "cat": "General Apps",
    "href": "apps/#gen-app-muxus",
    "desc": "Modern terminal multiplexer with seamless split-pane SSH sessions for network engineers.",
    "tags": [
      "#terminal",
      "#ssh",
      "#gui"
    ]
  }
];

  function findSearchShadow() {
    var host = Array.from(document.body.children).find(function (el) { return el.shadowRoot; });
    return host ? host.shadowRoot : null;
  }

  function getBaseScope() {
    try {
      if (typeof __md_scope !== 'undefined' && __md_scope.href) {
        return __md_scope.href;
      }
      var logoLink = document.querySelector('.md-header__button.md-logo');
      if (logoLink && logoLink.href) {
        return logoLink.href;
      }
    } catch (e) {
      // Ignore
    }
    return window.location.origin + '/awesome-nokia/';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlightTerms(text, terms) {
    if (!text) return '';
    var escaped = escapeHtml(text);
    if (!terms || terms.length === 0) return escaped;
    var pattern = terms
      .map(function (t) { return t.replace(/[.*+?^\$\{\}()|[\]\\]/g, '\\$&'); })
      .filter(Boolean)
      .join('|');
    if (!pattern) return escaped;
    try {
      var re = new RegExp('(' + pattern + ')', 'gi');
      return escaped.replace(re, '<mark style="background:transparent;color:var(--color-highlight,#38bdf8);font-weight:700;">$1</mark>');
    } catch (err) {
      return escaped;
    }
  }

  function searchCuratedCards(query) {
    var rawQ = (query || '').trim();
    if (!rawQ) return [];

    var q = rawQ.toLowerCase();
    var isTagSearch = q.startsWith('#');
    var cleanQ = isTagSearch ? q.slice(1) : q;
    var terms = cleanQ.split(/\s+/).filter(Boolean);

    if (terms.length === 0) return [];

    var matches = [];

    for (var i = 0; i < CURATED_CARDS.length; i++) {
      var card = CURATED_CARDS[i];
      var titleLower = card.title.toLowerCase();
      var descLower = card.desc.toLowerCase();
      var catLower = card.cat.toLowerCase();
      var tagsClean = card.tags.map(function (t) { return t.toLowerCase().replace(/^#/, ''); });

      var allTermsMatch = true;
      var score = 0;

      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];
        var termMatched = false;

        // Title matching
        if (titleLower === term) {
          score += 1000;
          termMatched = true;
        } else if (titleLower.startsWith(term)) {
          score += 600;
          termMatched = true;
        } else if (titleLower.includes(' ' + term) || titleLower.includes(term + ' ')) {
          score += 400;
          termMatched = true;
        } else if (titleLower.includes(term)) {
          score += 300;
          termMatched = true;
        }

        // Tag matching
        var tagExact = tagsClean.find(function (t) { return t === term; });
        var tagSub = tagsClean.find(function (t) { return t.includes(term); });
        if (tagExact) {
          score += (isTagSearch ? 900 : 500);
          termMatched = true;
        } else if (tagSub) {
          score += (isTagSearch ? 500 : 250);
          termMatched = true;
        }

        // Description matching
        if (descLower.includes(term)) {
          score += 100;
          termMatched = true;
        }

        // Category / platform matching
        if (catLower.includes(term)) {
          score += 50;
          termMatched = true;
        }

        if (!termMatched) {
          allTermsMatch = false;
          break;
        }
      }

      if (allTermsMatch && score > 0) {
        matches.push({ card: card, score: score, terms: terms });
      }
    }

    matches.sort(function (a, b) { return b.score - a.score; });
    return matches;
  }

  function getOrInjectSearchElements(shadow) {
    var z = shadow.querySelector('.z');
    if (!z) return null;

    // Inject custom scoped CSS into shadow root to suppress native results and style card search
    if (!shadow.getElementById('card-search-custom-css')) {
      var style = document.createElement('style');
      style.id = 'card-search-custom-css';
      style.textContent = [
        '/* Hide native Preact results container and native header */',
        '.z > h3.B:not(.card-search-header),',
        '.z > ol.b:not(.card-search-list) {',
        '  display: none !important;',
        '}',
        '.card-search-list {',
        '  display: flex !important;',
        '  flex-direction: column !important;',
        '  gap: 2px !important;',
        '  line-height: 1.3 !important;',
        '  padding: 0 !important;',
        '  margin: var(--space-2) !important;',
        '  margin-top: 0 !important;',
        '  list-style: none !important;',
        '}',
        '.card-search-item {',
        '  margin: 0 !important;',
        '  list-style: none !important;',
        '}',
        '.card-search-header {',
        '  display: flex !important;',
        '  justify-content: space-between !important;',
        '  align-items: center !important;',
        '  font-weight: 600 !important;',
        '  letter-spacing: 0.05em !important;',
        '  padding: 6px 14px 4px 14px !important;',
        '  font-size: 11px !important;',
        '}',
        '.card-search-empty {',
        '  padding: 28px 16px !important;',
        '  text-align: center !important;',
        '  font-size: 13.5px !important;',
        '  line-height: 1.6 !important;',
        '}',
        '.card-search-empty-hint {',
        '  font-size: 12px !important;',
        '  margin-top: 8px !important;',
        '  opacity: 0.75 !important;',
        '}',
        '.card-search-tags {',
        '  display: flex !important;',
        '  flex-wrap: wrap !important;',
        '  gap: 4px !important;',
        '  margin-top: 6px !important;',
        '}',
        '.card-search-item a {',
        '  border-left: 3px solid transparent !important;',
        '  border-radius: 6px !important;',
        '}',
        '.card-search-item a.h,',
        '.card-search-item a:hover {',
        '  background-color: var(--card-selected-bg, rgba(2, 132, 199, 0.08)) !important;',
        '  border-left: 3px solid var(--card-selected-border, #0284c7) !important;',
        '}'
      ].join('\n');
      shadow.appendChild(style);
    }

    var header = z.querySelector('.card-search-header');
    if (!header) {
      header = document.createElement('div');
      header.className = 'B card-search-header';
      z.insertBefore(header, z.firstChild);
    }

    var list = z.querySelector('.card-search-list');
    if (!list) {
      list = document.createElement('ol');
      list.className = 'b card-search-list';
      if (header.nextSibling) {
        z.insertBefore(list, header.nextSibling);
      } else {
        z.appendChild(list);
      }
    }

    return { z: z, header: header, list: list };
  }

  var isRendering = false;
  function renderView(shadow, query) {
    if (isRendering) return;
    isRendering = true;
    try {
      var els = getOrInjectSearchElements(shadow);
      if (!els) return;

    var header = els.header;
    var list = els.list;
    var rawQ = (query || '').trim();

    var isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
    var headerTextColor = isDark ? '#94a3b8' : '#475569';
    var breadcrumbColor = isDark ? '#94a3b8' : '#64748b';
    var titleColor = isDark ? '#f8fafc' : '#0f172a';
    var descColor = isDark ? '#cbd5e1' : '#334155';
    var tagBg = isDark ? '#1e293b' : '#f1f5f9';
    var tagColor = isDark ? '#7dd3fc' : '#0369a1';
    var tagBorder = isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #cbd5e1';
    header.style.color = headerTextColor;

    if (shadow && shadow.host) {
      shadow.host.style.setProperty('--card-selected-bg', isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(2, 132, 199, 0.08)');
      shadow.host.style.setProperty('--card-selected-border', isDark ? '#38bdf8' : '#0284c7');
    }

    var base = getBaseScope();

    if (rawQ === '') {
      // PREPOPULATED (Top 12 Curated Featured Projects)
      header.innerHTML = '<span>FEATURED PROJECTS</span><span style="font-size:10px;opacity:0.85;letter-spacing:0.04em;">CURATED</span>';
      list.innerHTML = FEATURED_PROJECTS.map(function (item, idx) {
        var fullUrl;
        try {
          fullUrl = new URL(item.href, base).href;
        } catch (err) {
          fullUrl = item.href;
        }
        var activeClass = idx === 0 ? ' h' : '';
        return (
          '<li class="card-search-item" data-index="' + idx + '">' +
            '<a href="' + fullUrl + '" class="i' + activeClass + '">' +
              '<div class="C">' +
                '<div class="D">' +
                  '<menu class="n"><li style="color:' + breadcrumbColor + ';">' + item.cat + '</li></menu>' +
                '</div>' +
                '<h2 class="x" style="color:' + titleColor + ';">' + item.title + '</h2>' +
                '<div class="u" style="color:' + descColor + ';">' +
                  item.desc +
                  '<div class="card-search-tags">' +
                    item.tags.map(function (t) {
                      return '<code class="card-tag-pill" style="background:' + tagBg + ';color:' + tagColor + ';border:' + tagBorder + ';padding:2px 6px;border-radius:4px;font-size:11px;line-height:1.4;">' + t + '</code>';
                    }).join(' ') +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
          '</li>'
        );
      }).join('');
    } else {
      // STRICT CARD SEARCH (Only matching 65 curated cards)
      var matches = searchCuratedCards(rawQ);
      if (matches.length === 0) {
        header.innerHTML = '<span>NO CURATED RESULTS</span><span>0 MATCHES</span>';
        list.innerHTML = (
          '<li class="card-search-item card-search-empty" style="color:' + descColor + ';">' +
            'No curated resource cards match "<strong>' + escapeHtml(rawQ) + '</strong>".' +
            '<div class="card-search-empty-hint" style="color:' + breadcrumbColor + ';">' +
              'Try searching by tool name (e.g. "Containerlab", "fcli", "RAVEN"), platform ("SR Linux", "EDA", "SROS"), or tag (e.g. "#automation", "#telemetry", "#lab").' +
            '</div>' +
          '</li>'
        );
      } else {
        var countText = matches.length + ' CURATED CARD' + (matches.length === 1 ? '' : 'S');
        header.innerHTML = '<span>' + countText + '</span><span style="font-size:10px;opacity:0.85;letter-spacing:0.04em;">CARD ONLY</span>';
        list.innerHTML = matches.map(function (match, idx) {
          var card = match.card;
          var fullUrl;
          try {
            fullUrl = new URL(card.href, base).href;
          } catch (err) {
            fullUrl = card.href;
          }

          var activeClass = idx === 0 ? ' h' : '';
          var highlightedTitle = highlightTerms(card.title, match.terms);
          var highlightedDesc = highlightTerms(card.desc, match.terms);

          return (
            '<li class="card-search-item" data-index="' + idx + '">' +
              '<a href="' + fullUrl + '" class="i' + activeClass + '">' +
                '<div class="C">' +
                  '<div class="D">' +
                    '<menu class="n"><li style="color:' + breadcrumbColor + ';">' + card.cat + '</li></menu>' +
                  '</div>' +
                  '<h2 class="x" style="color:' + titleColor + ';">' + highlightedTitle + '</h2>' +
                  '<div class="u" style="color:' + descColor + ';">' +
                    highlightedDesc +
                    '<div class="card-search-tags">' +
                      card.tags.map(function (t) {
                        return '<code class="card-tag-pill" style="background:' + tagBg + ';color:' + tagColor + ';border:' + tagBorder + ';padding:2px 6px;border-radius:4px;font-size:11px;line-height:1.4;">' + t + '</code>';
                      }).join(' ') +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</a>' +
            '</li>'
          );
        }).join('');
      }
    }

    // Attach click and mouse hover handlers to rendered items
    var links = list.querySelectorAll('.card-search-item a');
    links.forEach(function (a, idx) {
      a.addEventListener('mouseenter', function () {
        links.forEach(function (el) { el.classList.remove('h'); });
        a.classList.add('h');
      });
      a.addEventListener('click', function (e) {
        var backdrop = shadow.querySelector('.p');
        if (backdrop) backdrop.click();
      });
    });
  } finally {
    isRendering = false;
  }
}

  function setupSearchShadow(shadow) {
    if (!shadow || shadow._hasCardSearchSetup) return;

    function attachListeners() {
      if (shadow._hasCardSearchSetup) return true;
      var input = shadow.querySelector('input');
      var modalEl = shadow.querySelector('.l');
      var z = shadow.querySelector('.z');

      if (!input || !z) return false;
      shadow._hasCardSearchSetup = true;

      // Ensure our custom style and elements exist
      getOrInjectSearchElements(shadow);

      if (!input._hasCardSearchListener) {
        input._hasCardSearchListener = true;

        var lastQuery = null;
        var handleQuery = function () {
          var val = input.value;
          if (val === lastQuery) return;
          lastQuery = val;
          renderView(shadow, val);
        };

        input.addEventListener('input', handleQuery);
        input.addEventListener('search', handleQuery);
        input.addEventListener('focus', function () {
          if (lastQuery === null) {
            lastQuery = input.value;
            renderView(shadow, input.value);
          }
        });

        // Keyboard navigation across card search results
        var handleKeyDown = function (e) {
          if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter' && e.key !== 'Escape') {
            return;
          }

          var els = getOrInjectSearchElements(shadow);
          if (!els) return;
          var links = Array.from(els.list.querySelectorAll('.card-search-item a'));
          if (links.length === 0) return;

          var activeIdx = links.findIndex(function (a) { return a.classList.contains('h'); });
          if (activeIdx === -1) activeIdx = 0;

          if (e.key === 'ArrowDown') {
            e.preventDefault();
            e.stopPropagation();
            var nextIdx = Math.min(activeIdx + 1, links.length - 1);
            links.forEach(function (a, i) {
              if (i === nextIdx) {
                a.classList.add('h');
                a.scrollIntoView({ block: 'nearest' });
              } else {
                a.classList.remove('h');
              }
            });
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopPropagation();
            var prevIdx = Math.max(activeIdx - 1, 0);
            links.forEach(function (a, i) {
              if (i === prevIdx) {
                a.classList.add('h');
                a.scrollIntoView({ block: 'nearest' });
              } else {
                a.classList.remove('h');
              }
            });
          } else if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (activeIdx >= 0 && links[activeIdx]) {
              var targetLink = links[activeIdx];
              var backdrop = shadow.querySelector('.p');
              if (backdrop) backdrop.click();
              targetLink.click();
              if (window.location.href !== targetLink.href) {
                window.location.href = targetLink.href;
              }
            }
          } else if (e.key === 'Escape') {
            e.preventDefault();
            var backdrop = shadow.querySelector('.p');
            if (backdrop) backdrop.click();
          }
        };

        input.addEventListener('keydown', handleKeyDown);

        if (modalEl) {
          modalEl.addEventListener('keydown', function (e) {
            if (e.target !== input) {
              handleKeyDown(e);
            }
          });
        }
      }

      if (modalEl && !modalEl._hasCardSearchObserver) {
        modalEl._hasCardSearchObserver = true;
        var modalObserver = new MutationObserver(function () {
          if (!modalEl.classList.contains('d')) {
            // Modal opened
            var curInput = shadow.querySelector('input');
            lastQuery = curInput ? curInput.value : '';
            renderView(shadow, lastQuery);
          }
        });
        modalObserver.observe(modalEl, { attributes: true, attributeFilter: ['class'] });
      }

      // Keep custom view rendered even if Preact mutates .z
      if (z && !z._hasCardSearchObserver) {
        z._hasCardSearchObserver = true;
        var zObserver = new MutationObserver(function () {
          if (isRendering) return;
          var hasOurList = z.querySelector('.card-search-list');
          if (!hasOurList) {
            var curInput = shadow.querySelector('input');
            lastQuery = curInput ? curInput.value : '';
            renderView(shadow, lastQuery);
          }
        });
        zObserver.observe(z, { childList: true });
      }

      // Initial render
      renderView(shadow, input.value);
      return true;
    }

    if (!attachListeners()) {
      var shadowObs = new MutationObserver(function () {
        if (attachListeners()) {
          shadowObs.disconnect();
        }
      });
      shadowObs.observe(shadow, { childList: true, subtree: true });
    }
  }

  // Observe theme changes to dynamically refresh search colors
  var themeObserver = new MutationObserver(function () {
    var shadow = findSearchShadow();
    if (shadow) {
      var input = shadow.querySelector('input');
      renderView(shadow, input ? input.value : '');
    }
  });
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-md-color-scheme'] });

  // Observe creation of the search modal shadow root
  var bodyObserver = new MutationObserver(function () {
    var shadow = findSearchShadow();
    if (shadow && !shadow._hasCardSearchSetup) setupSearchShadow(shadow);
  });
  bodyObserver.observe(document.body, { childList: true });

  var existingShadow = findSearchShadow();
  if (existingShadow) setupSearchShadow(existingShadow);

  // Global search triggers
  document.querySelectorAll('.md-search__button, label[for="__search"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTimeout(function () {
        var shadow = findSearchShadow();
        if (shadow) {
          setupSearchShadow(shadow);
          var input = shadow.querySelector('input');
          renderView(shadow, input ? input.value : '');
        }
      }, 60);
    });
  });
})();
