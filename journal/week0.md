# Week 0 — Billing and Architecture

## The gitpod.yml file was configured to run some tasks when the IDE is launched (Cold start)


tasks:
  - name: aws-cli
    env: 
      AWS_CLI_AUTO_PROMPT: on-partial
    init: |
      cd /workspace
      curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
      unzip awscliv2.zip
      sudo ./aws/install
      cd $THEIA_WORKSPACE_ROOT


vscode:
  extensions:
    - 42Crunch.vscode-openapi


Here's a breakdown of the configuration:

    Tasks Section:
        The tasks section defines a list of tasks to be performed, each represented by a block starting with - name:.

    AWS CLI Task:
        The first task is named "aws-cli."
        It sets an environment variable (AWS_CLI_AUTO_PROMPT) with the value "on-partial."
        The init block contains a script to be executed as part of the task's initialization.
            cd /workspace: Changes the working directory to "/workspace."
            curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip": Downloads the AWS CLI installer ZIP file.
            unzip awscliv2.zip: Extracts the contents of the ZIP file.
            sudo ./aws/install: Installs the AWS CLI using a script in the extracted files.
            cd $THEIA_WORKSPACE_ROOT: Changes the working directory to the root of the Theia workspace.

    VSCode Section:
        The vscode section appears to configure Visual Studio Code (VSCode) extensions.
        It specifies an extension to be installed: 42Crunch.vscode-openapi.

In summary, this configuration sets up a task named "aws-cli" that installs the AWS CLI in a specified directory within the workspace. Additionally, it includes a configuration for a Visual Studio Code extension (42Crunch.vscode-openapi) to be installed. The environment variable AWS_CLI_AUTO_PROMPT is also set for the AWS CLI task. The use of this configuration might be related to setting up a development environment with specific tools and extensions, possibly in an online IDE environment like GitPod.


## An AWS budget was also created to manage cost and to alert the user whenever costs exceed a certain threshold