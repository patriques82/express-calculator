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
        dockerfile true
      }
      steps {
        echo 'Frontend...'
        sh 'svn --version'
        sh 'node --version'
      } 
    }
    stage('Delivery') {
      when {
        branch 'main'
      }
      steps {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
          def image = docker.build("patriques82/express-calculator")
          image.push()
        }
      }
    }
  }
}
