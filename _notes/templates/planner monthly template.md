---
parent: [[2022]]
plannerPT: monthly
month: 
---
[[2022]] #planner
#  {{title}}

```dataview
LIST
FROM "planner"
WHERE plannerPT = "daily" AND contains(file.name,"{{title}}")
SORT file.day
```