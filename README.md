# tensorflow (ID: com.kaulias.tensorflow)

Use pretrained tensorflow models for image classifying and text analysis

!Warning: It takes some times to download needed pretrained packages and models
To test only models without service use  test_model_loading.js 

## Contents

- [Installation](#Installation)
  - [MESG Engine](#MESG-Engine)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [started](#started)
  - [Tasks](#Tasks)
    - [taskX](#taskX)

## Installation

### MESG Engine

This service requires [MESG Engine](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG Engine by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/myservice) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions

### Events

<h4 id="started">started</h4>

Event key: `started`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **x** | `x` | `Boolean` |  |

### Tasks

<h4 id="taskX">toxicity</h4>

Task key: `toxicity`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **sentences** | `sentences` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **succesfull** | `succesfull` | `Boolean` |  |
| **result** | `result` | `Object` |  |

