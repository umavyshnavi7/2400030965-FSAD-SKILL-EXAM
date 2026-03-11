# Vehicle Management System

A Maven Hibernate project with frontend for managing vehicle records.

## Project Structure

```
├── src/main/java/com/klef/fsad/exam/
│   ├── Vehicle.java          # Entity class with auto-generated ID
│   └── ClientDemo.java       # Database operations (Insert & Update)
├── src/main/resources/
│   └── hibernate.cfg.xml     # Hibernate configuration
├── frontend/
│   └── index.html            # Standalone web interface
└── pom.xml                   # Maven configuration
```

## Features

### Backend (Hibernate)
- **Vehicle Entity**: ID (auto-generated), Name, Description, Date, Status
- **Insert Operation**: Add new vehicle records to database
- **Update Operation**: Update vehicle Name and Status by ID
- **Database**: fsadexam (MySQL)

### Frontend (HTML/CSS/JavaScript)
- Modern responsive design
- Insert vehicle form
- Update vehicle form
- Real-time validation
- Success/error messages

## Setup Instructions

### 1. Database Setup
```sql
CREATE DATABASE fsadexam;
```

### 2. Configure Database
Edit `src/main/resources/hibernate.cfg.xml`:
```xml
<property name="hibernate.connection.username">YOUR_USERNAME</property>
<property name="hibernate.connection.password">YOUR_PASSWORD</property>
```

### 3. Build Project
```bash
mvn clean install
```

### 4. Run Backend
Run `ClientDemo.java` from your IDE or:
```bash
mvn exec:java -Dexec.mainClass="com.klef.fsad.exam.ClientDemo"
```

### 5. Use Frontend
Open `frontend/index.html` in your browser (works standalone)

## Technologies Used
- Java 11
- Hibernate 5.6.15
- MySQL 8.0
- Maven
- HTML5/CSS3/JavaScript

## Package
`com.klef.fsad.exam`

## Author
FSAD Exam Project
# 2400030965-FSAD-SKILL-EXAM
