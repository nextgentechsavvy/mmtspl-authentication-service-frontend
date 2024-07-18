pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build 'mmtspl-authentication-service-frontend'
        sh 'npm install'
      }
    }

  }
}