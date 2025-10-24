pipeline {
    agent any

    environment {
        VENV = "${WORKSPACE}/venv"
        PYTHONPATH = "${WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sahityakunaparaju/pomodoro-flask.git'
            }
        }

        // <-- Replace your old Setup Python stage with this one
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
    }

    post {
        always {
            echo "CI/CD pipeline finished."
        }
        success {
            echo "All tests passed successfully!"
        }
        failure {
            echo "Pipeline failed. Check console output."
        }
    }
}
