# 2400030965-FSAD-SKILL-EXAM

# Vehicle Management System

A complete Maven Hibernate project with frontend for managing vehicle records.

## Project Structure

```
├── src/main/java/com/klef/fsad/exam/
│   ├── Vehicle.java          # Entity class with auto-generated ID
│   └── ClientDemo.java       # Database operations (Insert & Update)
├── src/main/resources/
│   └── hibernate.cfg.xml     # Hibernate configuration
├── css/
│   └── style.css             # Stylesheet
├── js/
│   └── script.js             # JavaScript functionality
├── index.html                # Frontend interface
└── pom.xml                   # Maven configuration
```

## Backend Features (Java + Hibernate)

### I. Insert New Vehicle
- Vehicle entity with auto-generated ID
- Properties: ID, Name, Description, Date, Status
- Hibernate session management
- Transaction handling

### II. Update Vehicle
- Update Name and Status by ID
- Validation for existing records
- Error handling

## Frontend Features (HTML/CSS/JavaScript)

- Modern gradient UI design
- Responsive layout
- Insert vehicle form
- Update vehicle form
- Real-time validation
- Success/Error messages
- In-memory storage simulation

## Technologies Used

### Backend
- Java 11
- Hibernate 5.6.15
- MySQL 8.0
- Maven

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

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
Open `index.html` in your browser (works standalone)

## Package
`com.klef.fsad.exam`

## Database
`fsadexam`

## Student Information
- **Student ID**: 2400030965
- **Project**: FSAD Skill Exam

## Browser Compatibility
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
