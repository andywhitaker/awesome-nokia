
# Awesome Nokia
![Nokia Refreshed Logo](images/nokia-refreshed-logo-2_1.png)

> A curated list of awesome Nokia projects and useful resources for working with Nokia network devices.


## Containerlab
- [Containerlab](https://containerlab.dev) - A powerful opensource virtual network lab software
- [Containerlab GUI App](https://github.com/srl-labs/containerlab-app)- A GUI for containerlab! Can be:
	- Installed as a Desktop app
	- Run as a Self-Hosted Webpage
	- Consumed via [Public Web App](https://srl-labs.github.io/containerlab-app/) for reading / writing of topology files only - cannot launch labs
- [VS Code Containerlab](https://github.com/srl-labs/vscode-containerlab) - VS Code extension for Containerlab featuring GUI topology editor, built-in wireshark capture, easy SSH to nodes, and many other features
- [Antimony](https://github.com/antimony-team/antimony) - Another Containerlab GUI and lab manager - Created primarily for use in an educational environment but also can be used for personal lab management
- [vrnetlab](https://github.com/srl-labs/vrnetlab) - Tool to convert VM-based virtual network device images into Containerlab-compatible containers
- [Containerlab Discord Community](https://discord.gg/vAyddtaEV9) - Discord chat with Containerlab users and devs


## SR Linux
- [SR Linux Container](https://learn.srlinux.dev) - Virtual SR Linux node for lab use
- [Pydantic SR Linux](https://github.com/srl-labs/pydantic-srlinux) - Generate [Pydantic validation](https://pydantic.dev/docs/validation/latest/get-started/) models for Nokia SR Linux configuration paths
- [YANG Browser](https://yangbrowser.nokia.com/srlinux) - Lists all SR Linux model paths (gNMI, JSON, etc...)
- [Nokia SR Linux and SROS VS Code Language Server](https://marketplace.visualstudio.com/items?itemName=srl-labs.sr-vscode) - VS Code plugin with advanced auto-completion and schema validation for working with text SR Linux and SROS configurations ([Git Repo](https://github.com/srl-labs/vscode-sr))
- [MultiCLI](https://github.com/srl-labs/MultiCLI) - CLI Plugin for SR Linux emulating common commands and output formatting of other vendor NOSes to ease migration to SR Linux
- [SR Linux GPT](https://learn.srlinux.dev/blog/2023/sr-linux-gpt/)- SR Linux App integrating OpenAI ChatGPT as an agent into the SR Linux command line
- [Front Panel CLI Plugin](https://github.com/srl-labs/frontpanel-cli-plugin) - View an image of the front panel and port statuses of your switch in the terminal!
- [SR Linux Conversion Tool](https://github.com/srl-labs/srlconv) - Convert Nokia SR Linux configuration between software versions and compare representations before and after
- [Custom SNMP Framework](https://learn.srlinux.dev/snmp/snmp_framework/) - Customize and create your own SNMP MIBs in SR Linux
- [SR Linux Ansible Collections](https://galaxy.ansible.com/ui/repo/published/nokia/srlinux/) - Ansible Collections for working with SR Linux ([Git Repo](https://github.com/nokia/srlinux-ansible-integration))
- [SR Linux Discord Community](https://discord.gg/tZvgjQ6PZf) - Discord chat with SR Linux users and devs


## EDA
- [Try EDA Playground](https://github.com/nokia-eda/playground) - Try EDA free locally
- [EDA VS Code Extension](https://marketplace.visualstudio.com/items?itemName=eda-labs.vscode-eda) - VS Code extension integration with EDA allowing read and write of configuration and state ([Git Repo](https://github.com/eda-labs/vscode-eda))
- [EDA Playground in CodeSpaces](https://docs.eda.dev/26.4/software-install/non-production/codespaces/) - Run EDA free on GitHub's compute in CodeSpaces!
- [EDA Ansible Collections](https://ansible.eda.dev/)
- [EDA Terraform Providers](https://registry.terraform.io/namespaces/nokia-eda)
- [EDA Pydantic Models](https://github.com/eda-labs/pydantic-eda) - Generate [Pydantic validation](https://pydantic.dev/docs/validation/latest/get-started/) models for Nokia EDA custom resources
- [TopoBuilder](https://topobuilder.x.eda.dev/) - Web app for creating arbitrary EDA topologies which can be imported into EDA via Network Topology workflow ([Git Repo](https://github.com/eda-labs/topo-builder))
- [EDA Discord Community](https://eda.dev/discord) - Discord chat with EDA users and devs


## SROS
- [SR-SIM Container](https://documentation.nokia.com/sr/26-3/7x50-shared/srsim-installation-setup/getting-started.html) - Virtual SROS node for lab use. May be obtained via your Nokia support portal or your Nokia Sales Engineer
- [SR-SIM HW Schema App](https://github.com/FloSch62/srsim-hw-schema) - Easily generate and validate Containerlab device hardware configurations for various SR-SIM nodes
- [Nokia SR Linux and SROS VS Code Language Server](https://marketplace.visualstudio.com/items?itemName=srl-labs.sr-vscode) - VS Code plugin with advanced auto-completion and schema validation for working with text SR Linux and SROS configurations ([Git Repo](https://github.com/srl-labs/vscode-sr))
- [YANG Browser](https://yangbrowser.nokia.com/sros) - Lists all SROS model paths (gNMI, JSON, etc...)
- [pySROS](https://network.developer.nokia.com/static/sr/learn/pysros/latest/introduction.html) - Model-Driven Python client libraries for SROS
- SROS Books
	- [Versatile Routing and Services with BGP Volume II](resources/colin-bookham-books/Versatile%20Routing%20and%20Services%20with%20BGP%20Volume%20II%20[Issue%201].pdf) - Excellent deep-dive into SROS BGP services by Colin Bookham
	- [Implementing Segment Routing with SR-OS](resources/colin-bookham-books/Implementing%20Segment%20Routing%20with%20SR-OS%20[Issue%201.15].pdf) - Excellent deep-dive into SROS Segment Routing by Colin Bookham
- [SROS Ansible Collections](https://galaxy.ansible.com/ui/repo/published/nokia/sros) - Ansible collections for working with SROS ([Git Repo](https://github.com/nokia/sros-ansible-integration))
- [SROS Discord Community](https://discord.gg/tZvgjQ6PZf) - Discord chat with SROS users and devs (SROS is a channel within the SR Linux Discord)


## General Networking
- [AI Network Calculator](https://networkcloudandeverything.com/2-tier-gpu-fabric-calculator/) - AI Network Calculator

## General Automation
- [gNMIc](https://gnmic.openconfig.net/) - OpenSource gNMI Client by Nokia
- [NETCONF VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Nokia.netconf-client) - NETCONF client for VS Code ([Git Repo](https://github.com/nokia/vscode-netconf))
- [Robot Framework](https://robotframework.org/) - Open source automation framework for test automation and robotic process automation (RPA).
