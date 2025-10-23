pipeline {
    agent any

    environment {
        VENV_DIR = "${WORKSPACE}/venv"
        PYTHONPATH = "${WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sahityakunaparaju/pomodoro-flask.git'
            }
        }

        stage('Setup Python') {
            steps {
                sh """
                python3 -m venv ${VENV_DIR}
                """
            }
        }

        stage('Install Dependencies') {
            steps {
                sh """
                source ${VENV_DIR}/bin/activate
                python -m pip install --upgrade pip
                pip install -r requirements.txt
                """
            }
        }

        stage('Run Tests') {
            steps {
                sh """
                source ${VENV_DIR}/bin/activate
                pytest tests/ --disable-warnings
                """
            }
        }
    }

    post {
        always {
            echo 'CI/CD pipeline finished.'
        }
        success {
            echo 'All tests passed!'
        }
        failure {
            echo 'Pipeline failed. Check console output.'
        }
    }
}
