---
title: SonarQube step configuration
description: Scan code repositories with SonarQube.
sidebar_position: 390
sidebar_label: SonarQube step configuration
helpdocs_topic_id: 4qe4h3cl28
helpdocs_category_id: m01pu2ubai
helpdocs_is_private: false
helpdocs_is_published: truex
---

<DocsTag  text="Code repo scanners"  backgroundColor= "#cbe2f9" textColor="#0b5cad" link="/docs/security-testing-orchestration/whats-supported/scanners?view-by=target-type#code-repo-scanners"  />
<DocsTag  text="Orchestration" backgroundColor= "#e3cbf9" textColor="#5c0bad" link="/docs/security-testing-orchestration/get-started/key-concepts/run-an-orchestrated-scan-in-sto"  />
<DocsTag  text="Extraction" backgroundColor= "#e3cbf9" textColor="#5c0bad" link="/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/sto-workflows-overview#extraction-scans-in-sto" />
<DocsTag  text="Ingestion" backgroundColor= "#e3cbf9" textColor="#5c0bad" link="/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingest-scan-results-into-an-sto-pipeline" /><br/>
<br/>

Harness STO integrates with [SonarQube](https://docs.sonarqube.org/latest/) to scan your code repositories for vulnerabilities, enforce policies, and maintain code quality. The SonarQube step supports all the three STO scan modes: **Orchestration**, **Ingestion**, and **Extraction**.

**Language Support**: All languages supported by SonarQube are compatible. Refer to the [SonarQube language reference](https://docs.sonarqube.org/latest/analysis/languages/overview/) for prerequisites specific to your repository's language.

<DocVideo src="https://www.youtube.com/embed/qP0TUQuTSfI?si=yzQslx3sXdQjXWTi" />

### SonarQube Issue categorization in STO

STO categorizes the SonarQube issues with severities: **Critical**, **High**, **Medium**, **Low**, and **Info**. The table below outlines how specific SonarQube issue types are classified in STO.

| SonarQube Issue Type        | STO Categorization                                                        |
|-----------------------------|-----------------------------------------------------------------------------------|
| Vulnerabilities         | Imported, normalized, deduplicated and assigned [STO severity levels](/docs/security-testing-orchestration/get-started/key-concepts/severities)            |
| Code Smells, Bug Smells, Maintainability issues| Imported and categorized under **Info** severity.                                   |
| [Quality Gates (Policies)](#view-sonarqube-quality-gate-failures)| Imported and categorized as policy issues with **Info** severity.                   |
| [Code Coverage](#view-sonarqube-code-coverage-results)           | Imported as both a step output variable and a policy issue with **Info** severity.  |
| Hotspots                | Currently not supported by STO.                                                   |

### Step configuration guidelines

Use the following guidelines when configuring and running SonarQube scans in STO:

#### Resource Allocation
  - By default, STO allocates **500Mi memory** for SonarQube scans, suitable primarily for Ingestion scans.
  - For Orchestration and Extraction scans, allocate at least **2GB memory**. Customize resource limits per [Set Container Resources](/docs/continuous-integration/use-ci/manage-dependencies/background-step-settings#set-container-resources).

#### Certificates and Root Access
  - Run scans with root access if adding trusted certificates at runtime.
  - Alternatively, configure STO images and pipelines to run as non-root users and manage self-signed certificates. For details, see [Configure your pipeline to use STO images from private registry](/docs/security-testing-orchestration/use-sto/set-up-sto-pipelines/configure-pipeline-to-use-sto-images-from-private-registry).

:::info
STO supports three different approaches for loading self-signed certificates. For more information, refer [Run STO scans with custom SSL certificates](/docs/security-testing-orchestration/use-sto/secure-sto-pipelines/ssl-setup-in-sto#supported-workflows-for-adding-custom-ssl-certificates-in-sto).


import StoMoreInfo from '/docs/security-testing-orchestration/sto-techref-category/shared/more-information.md';

<StoMoreInfo />
:::

## SonarQube step settings


The recommended workflow is to add a SonarQube step to a Security or Build stage and then configure it as described below.

A Docker-in-Docker background step is not required for this workflow.

<!--





-->

### Scan


<a name="scan-mode"></a>

#### Scan Mode


import StoSettingScanMode from './shared/step-palette/scan/type.md';

import StoSettingScanModeOrch  from './shared/step-palette/scan/mode/orchestration.md';

import StoSettingScanModeData from './shared/step-palette/scan/mode/extraction.md';
import StoSettingScanModeIngest from './shared/step-palette/scan/mode/ingestion.md';



<!-- StoSettingScanMode / -->
<StoSettingScanModeOrch />
<StoSettingScanModeData />
<StoSettingScanModeIngest />


#### Scan Configuration

The predefined configuration to use for the scan. 

- **Default** Extract results for the Main branch defined in SonarQube. SonarQube Community Edition supports extracting scan results for the Main branch only. 
- **Branch Scan** In Orchestration or Extraction mode, extract results based on how the pipeline is executed:
  - Manual executions - The branch defined in SonarQube ([Target variant](#variant))
  - Triggered executions - The pull request defined in SonarQube 


### Target


#### Type

import StoSettingScanTypeRepo     from './shared/step-palette/target/type/repo.md';

<StoSettingScanTypeRepo />


#### Target and Variant Detection 

import StoSettingScanTypeAutodetectRepo from './shared/step-palette/target/auto-detect/code-repo.md';
import StoSettingScanTypeAutodetectNote from './shared/step-palette/target/auto-detect/note.md';

<StoSettingScanTypeAutodetectRepo/>
<StoSettingScanTypeAutodetectNote/>


#### Name 

import StoSettingTargetName from './shared/step-palette/target/name.md';

<StoSettingTargetName />

If you're running an Extraction scan, this field should match the code repository name in SonarQube. 


#### Variant

import StoSettingTargetVariant from './shared/step-palette/target/variant.md';

<StoSettingTargetVariant  />

If you're running an Extraction scan, this field should match the branch or PR defined in SonarQube.

#### Workspace


import StoSettingTargetWorkspace from './shared/step-palette/target/workspace.md';



<StoSettingTargetWorkspace  />


### Ingestion File


import StoSettingIngestionFile from './shared/step-palette/ingest/file.md';



<StoSettingIngestionFile  />


### Authentication

<!-- ============================================================================= -->
<a name="auth-domain"></a>

#### Domain 

The URL of the SonarQube server. This is required for Orchestration and Extraction scans. This value corresponds to the [`sonar.host.url`](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/analysis-parameters/#mandatory-parameters) setting in SonarQube.


import StoSettingAuthDomain from './shared/step-palette/auth/domain.md';



<StoSettingAuthDomain />

<!-- ============================================================================= -->
<a name="auth-enforce-ssl"></a>

#### Enforce SSL


import StoSettingProductSSL from './shared/step-palette/auth/ssl.md';



<StoSettingProductSSL />


#### Access Token



import StoSettingAuthAccessToken from './shared/step-palette/auth/access-token.md';



<StoSettingAuthAccessToken />

:::info note

Harness recommends that you use a SonarQube **user** token that includes permissions to run scans and to create projects.

If you use a **project** token, you must have access to the SonarQube project that you want to scan. 

For more information, go to [Generating and using tokens](https://docs.sonarsource.com/sonarqube/latest/user-guide/user-account/generating-and-using-tokens/) in the SonarQube documentation. 

:::


### Scan Tool

#### Project key

The unique key of the SonarQube project to scan.

#### Exclude 

If you want to exclude some files from a scan, you can use this setting to configure the `sonar.exclusions` in your SonarQube project. For more information, go to [Narrowing the Focus](https://docs.sonarqube.org/latest/project-administration/narrowing-the-focus/) in the SonarQube docs.

#### Java Libraries

A comma-separated list of paths to files with third-party libraries used by your tests. For SonarQube scans, this corresponds to the `sonar.java.libraries` parameter.  

<!-- 

import StoSettingTooJavaLibraries from './shared/step-palette/tool/java/libraries.md';



<StoSettingTooJavaLibraries  />

-->


#### Java Binaries

A comma-separated list of paths to the folders with the bytecode files you want to scan. For SonarQube scans, this corresponds to the `sonar.java.binaries` parameter. 

<!--

import StoSettingToolJavaBinaries from './shared/step-palette/tool/java/binaries.md';


<StoSettingToolJavaBinaries  />
-->

### Log Level

import StoSettingLogLevel from './shared/step-palette/all/log-level.md';


<StoSettingLogLevel />



### Additional CLI flags

You can add CLI flags to run the [sonar-scanner binary](https://docs.sonarqube.org/9.6/analyzing-source-code/analysis-parameters/) with specific command-line arguments. Here are some examples:  

* `-Dsonar.ws.timeout=300`: Suppose the scan is experiencing timeouts due to long response times from a web service. This flag increases the timeout window.

* `-Dsonar.projectName=<project_name>`: The project name.

* `-Dsonar.projectVersion=<version_number>`: The project version to scan.

* `-Dsonar.projectKey=<project_key>`: The unique key of the project to scan.

* `-Dsonar.test.exclusions=**src/test/**/*.*`: The test files to exclude from the scan.


##### YAML example

```yaml
              - step:
                  type: Sonarqube
                  spec:
                    advanced:
                      args:
                        cli: "-Dsonar.projectVersion=1.2.3"
```

import StoSettingCliFlagsCaution from '/docs/security-testing-orchestration/sto-techref-category/shared/step-palette/all/cli-flags-caution.md';

<StoSettingCliFlagsCaution />

### Fail on Severity


import StoSettingFailOnSeverity from './shared/step-palette/all/fail-on-severity.md';


<StoSettingFailOnSeverity />


### Settings

Use this field to add environment variables to your SonarQube scans. For example, you can add [proxy settings](#proxy-settings) if your SonarQube instance is behind a proxy.

<!--
### Settings

You can add a `tool_args` setting to run the [sonar-scanner binary](https://docs.sonarqube.org/9.6/analyzing-source-code/analysis-parameters/) with specific command-line arguments. For example, suppose the scan is experiencing timeouts due to long response times from a web service. You can increase the timeout window like this:  `tool_args` = `-sonar.ws.timeout 300`.

-->

### Additional Configuration

import ScannerRefAdditionalConfigs from './shared/additional-config.md';

<ScannerRefAdditionalConfigs />


### Advanced settings

import ScannerRefAdvancedSettings from './shared/advanced-settings.md';

<ScannerRefAdvancedSettings />


## Proxy settings

import ProxySettings from '/docs/security-testing-orchestration/sto-techref-category/shared/proxy-settings.md';

<ProxySettings />

## View scan results in SonarQube portal
You can access scan results for your targets in the SonarQube portal. These results are organized under projects titled with your target/repository name. Further, you can view scan results specific to branches, PRs, and tags based on the scans performed in STO.


### Locate STO scan results in SonarQube portal

1. **_Branch_ scan results**: If you scanned a branch, you can find the results in SonarQube with the same branch name.
2. **Pull Request scan results**: If you scanned a PR, the results are located under the name `refs/pull/<PR_NUMBER>`, where `<PR_NUMBER>` is the specific number of the pull request.
3. **Tag scan results**: If you scanned a tag, the results are available with the same tag name.


### Set the name for your scans

When using the scan configuration **Branch Scan**, you can set the naming of the scan as it will appear in the SonarQube portal. This can be configured as follows:



1. Under **Scan Tool**, set the **Analysis Type** to **Manual**.
2. Set the **Branch Name** to the name you want to use for your scan results in the SonarQube portal.

<DocImage path={require('./static/sonarqube-orchestration-branch-scan.png')} width="30%" height="30%" title="Click to view full size image" />
<!-- ![alt_text](./static/sonarqube-orchestration-branch-scan.png "image_tooltip") -->

### Best practices

You can use [Harness expressions](https://developer.harness.io/docs/platform/variables-and-expressions/harness-variables/) to automatically populate values from triggers. For example, you can define the "Branch Name" as `<+trigger.sourceBranch>/<+trigger.prNumber>`. This will generate a naming convention in the format SOURCE_BRANCH_NAME/PR_NUMBER, which is particularly useful when triggering scans on a specific PR. 

This setup ensures that the scan result name reflects both the branch and the PR, making it easier to identify and manage scan results in the SonarQube portal.

## View SonarQube quality gate failures
SonarQube quality gate failures will appear in scan results as 'Info' severity issues, with the issue type set to `EXTERNAL_POLICY`. Additionally, you can apply an OPA policy to fail the pipeline based on the quality gate failures. This can be achieved using the [Security Tests - External Policy Failures](/docs/security-testing-orchestration/policies/create-opa-policies.md#block-the-pipeline-based-on-external-policy-failures) policy from the [security tests policy samples](/docs/security-testing-orchestration/policies/create-opa-policies.md#security-test-policy-samples).

To retrieve quality gate failure data from SonarQube, ensure the access token used in the SonarQube step configuration has **Browse Project** or **Administer** [permissions](https://docs.sonarsource.com/sonarqube/latest/instance-administration/user-management/user-permissions/) for the project being scanned.

## View SonarQube code coverage results
SonarQube code coverage data appears in the scan results as `Info` issues. To locate it, search for `Code Coverage` within the Info issues, the issue type will be labeled as Code Coverage. Additionally, you can apply an OPA policy to fail the pipeline based on the code coverage results. This can be achieved using the [Security Tests - Code Coverage](/docs/security-testing-orchestration/policies/create-opa-policies.md#block-the-pipeline-based-on-the-code-coverage-results) policy from the [security tests policy samples](/docs/security-testing-orchestration/policies/create-opa-policies.md#security-test-policy-samples).

To retrieve code coverage data from SonarQube, ensure the access token used in the SonarQube step configuration has **Browse Project** or **Administer** [permissions](https://docs.sonarsource.com/sonarqube/latest/instance-administration/user-management/user-permissions/) for the project being scanned.

<DocVideo src="https://www.youtube.com/embed/OCSTG5nfK1A?si=u9pI1f3iayDicAzv" />

<DocImage path={require('./static/sonarqube-code-coverage.png')} width="80%" height="80%" title="Click to view full size image" />

## Generate coverage reports and upload to SonarQube

You can set up your pipeline to generate test coverage reports and then get them pushed up to your SonarQube instance. To do this:

1. Add a **Run** step to your pipeline before the SonarQube step.

2. Set the **Image** field to a base image that's compatible with the repo you're scanning.

3. Add commands to install the binary and any other dependencies required to generate the coverage report. 

3. Add the commands necessary to generate the report.

4. Add a [failure strategy](/docs/continuous-delivery/x-platform-cd-features/executions/step-failure-strategy-settings.md) to the Run step and configure it to ignore all failures.

   This step is required if you want the pipeline to proceed even if it can't generate a coverage report. 

4. Update your SonarQube step with the path to the coverage report.

   - This step is required only if you saved your report to a non-default folder and/or filename.

   - To specify the report path, add the CLI argument for the report path to [Additional CLI Flags](#additional-cli-flags) in your SonarQube scan step. 

:::note important notes

- You must ensure that you generate reports that `sonar-cli` can find and upload, and that your SonarQube instance can ingest.

- For more information, go to [Test Coverage](https://docs.sonarsource.com/sonarqube/9.8/analyzing-source-code/test-coverage/overview/) in the SonarQube documentation.

- Carefully review the specific language reference to make sure that you install the required binaries and dependencies, and that you publish your reports in the correct format.

- Note that there may be additional settings for downloads such as PDF reports that are required. For example, because [a Temporary branch is created, administrators will need to enable the `Keep when inactive` setting](https://docs.sonarsource.com/sonarqube-server/10.4/project-administration/pdf-reports/#temporary-branches). Please refer to the SonarQube's documentation regarding these adjustments

:::

#### Example: generate a Python coverage report

Here's an example workflow for generating a Python 3.9 coverage report:

1. Add the **Run** step.

2. Set the **Image** to `python:3.9-alpine`.

3. Add commands to install `coverage` and any other dependencies required to generate the report.

4. Add a `coverage` command to generate a coverage report. The specific usage depends on the language and platform.

5. Add a second `coverage` command to convert the report to a SonarQube-compatible XML report.

6. If the Run step saves the coverage report to a non-default location, add the report path to [Additional CLI Flags](#additional-cli-flags) in your SonarQube scan step. For example: `-Dsonar.python.coverage.reportPaths=/shared/sonarqube/coverage.xml`.

Here's what the Run step looks like in YAML:

```yaml

- step:
    type: Run
    name: Run_Tests
    identifier: generate_python_coverage_report
    spec:
      connectorRef: account.harnessImage
      image: python:3.9-alpine
      shell: Sh
      command: |-
        # Install coverage and other
        # dependencies required by the code repo.
        pip install pytest-django pytest-cov 
        python3 -m pip install coverage
        pip install -r requirements.txt

        # Run coverage commands to generate a report
        # and then convert the report to XML.
        # This method ensures that SonarQube can ingest the resulting report.
        coverage run -m pytest **/tests 
        coverage xml

```

## Troubleshoot Sonar Scans

### Can't generate SonarQube report due to shallow clone

* Error message: `Shallow clone detected, no blame information will be provided. You can convert to non-shallow with 'git fetch --unshallow'`
* Cause: If the [depth setting](https://developer.harness.io/docs/continuous-integration/use-ci/codebase-configuration/create-and-configure-a-codebase#depth) in your pipeline's codebase configuration is shallow, SonarQube can't generate a report. This is a [known SonarQube issue](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scm-integration/#known-issues).
* Solution: Change the `depth` to `0`.

### Add the sonar.projectVersion to a Harness pipeline

In your SonarQube step, declare `-Dsonar.projectVersion` under [Additional CLI Flags](#additional-cli-flags).

### SonarQube doesn't scan the main branch and pull request branches in the same pipeline

:::info 

Harness introduced a fix in [STO release 1.83.1](/release-notes/security-testing-orchestration#version-1831) to provide better support for orchestrated branch and pull-request scanning with SonarQube Enterprise.

- With this fix, the orchestration step always downloads results for the scanned branch or pull request.
- To scan a branch or pull request, select **Branch Scan** in [Scan Configuration](#scan-configuration). With this option selected, the step scans the branch or pull request specified in the pipeline execution.

:::

If SonarQube doesn't scan both the main branch and pull request (PR) branches within the same pipeline, it might indicate an issue with the pull request setup in SonarQube.

One potential solution involves configuring conditional arguments within the Harness Platform to handle PR and branch scan requests separately. To implement this solution, you can use [conditional executions](/docs/platform/pipelines/step-skip-condition-settings) to run specific steps based on whether it's a PR scan request or a branch scan request. For example, your conditional executions could use JEXL expressions with [codebase variables](/docs/continuous-integration/use-ci/codebase-configuration/built-in-cie-codebase-variables-reference) like `<+codebase.build.type>=="branch"` or `<+codebase.build.type>=="pr"`.

This approach ensures proper configuration and execution of SonarQube scans for both main and PR branches within your pipeline.

