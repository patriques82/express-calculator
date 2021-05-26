pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'node --version'
      } 
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'node --version'
      } 
    }
    stage('Deploy') {
      steps {
        echo 'Deploy...'
        sh 'node --version'
      } 
    }
  }
}
