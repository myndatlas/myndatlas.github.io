---
parent: [[2021]]
week: {{title}}
plannerPT: weekly
---
[[2021]] #planner

# {{title}}
```dataview
LIST
FROM "planner" 
WHERE week = "{{title}}" AND plannerPT = "daily"
SORT file.day
```
---
```dataview
TASK
FROM "planner" 
WHERE week = "{{title}}" AND plannerPT = "daily" AND meta(section).subpath != "Schedule"
SORT file.day
```

