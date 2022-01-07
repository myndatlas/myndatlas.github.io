---
parent: [[All Years]]
plannerPT: yearly
---
[[All Years]] #planner

# Year Note {{title}}

### Monthly
```dataview
LIST date(file.day).year
FROM "planner"
WHERE plannerPT = "monthly" AND contains(file.name,"{{title}}")
SORT file.name
```

### Weekly
```dataview
LIST
FROM "planner" 
WHERE plannerPT = "weekly" AND contains(file.name,"{{title}}")
SORT file.name
```