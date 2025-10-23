pipeline {
    agent any

    environment {
        VENV = "${WORKSPACE}\\venv"
        PYTHONPATH = "${WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sahityakunaparaju/pomodoro-flask.git'
            }
        }

        stage('Setup Python') {
            steps {
                bat "python -m venv %VENV%"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "%VENV%\\Scripts\\activate && pip install --upgrade pip"
                bat "%VENV%\\Scripts\\activate && pip install -r requirements.txt"
            }
        }

        stage('Run Tests') {
            steps {
                bat "%VENV%\\Scripts\\activate && set PYTHONPATH=%PYTHONPATH% && pytest tests/"
            }
        }
    }

    post {
        always {
            echo "CI/CD pipeline finished."
        }
    }
}
