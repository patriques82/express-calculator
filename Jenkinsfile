pipeline {
  agent none
  stages {
    stage('Backend') {
      agent {
        docker { image 'maven:3.8.1-adoptopenjdk-11' }
      }
      steps {
        echo 'Backend...'
        sh 'mvn --version'
      } 
    }
    stage('Frontend') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        echo 'Frontend...'
        sh 'node --version'
      } 
    }
  }
}
