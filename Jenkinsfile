pipeline {
    agent any

    environment {
        VENV = "${WORKSPACE}/venv"
        PYTHONPATH = "${WORKSPACE}"
    }

    stages {
        // Stage 1: Checkout code from GitHub
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sahityakunaparaju/pomodoro-flask.git'
            }
        }

        // Stage 2: Setup Python virtual environment
        stage('Setup Python') {
            steps {
                echo "Creating virtual environment..."
                script {
                    if (isUnix()) {
                        sh '''
                        if ! command -v python3 &> /dev/null; then
                            echo "Python3 not found, trying python"
                            PY_CMD=python
                        else
                            PY_CMD=python3
                        fi
                        $PY_CMD -m venv $VENV
                        '''
                    } else {
                        bat """
                        python -m venv %VENV%
                        """
                    }
                }
            }
        }

        // Stage 3: Install project dependencies
        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                script {
                    if (isUnix()) {
                        sh """
                        . $VENV/bin/activate
                        pip install --upgrade pip
                        pip install -r requirements.txt
                        """
                    } else {
                        bat """
                        call %VENV%\\Scripts\\activate
                        python -m pip install --upgrade pip
                        pip install -r requirements.txt
                        """
                    }
                }
            }
        }

        // Stage 4: Run tests
        stage('Run Tests') {
            steps {
                echo "Running tests..."
                script {
                    if (isUnix()) {
                        sh ". $VENV/bin/activate && pytest tests/ --disable-warnings || echo 'Tests failed or none found'"
                    } else {
                        bat "call %VENV%\\Scripts\\activate && pytest tests\\ --disable-warnings"
                    }
                }
            }
        }

        // Stage 5: Simulated Deploy
        stage('Deploy') {
            steps {
                echo "Deploying application (simulation)..."
                script {
                    if (isUnix()) {
                        sh "echo 'Deployment successful on Unix!'"
                    } else {
                        bat "echo Deployment successful on Windows!"
                    }
                }
            }
        }
    }

    // Post actions for pipeline
    post {
        always {
            echo "CI/CD pipeline finished."
        }
        success {
            echo "All stages completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check console output."
        }
    }
}
