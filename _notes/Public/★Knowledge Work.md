---
title : ★Knowledge Work
feed : show
date : 24-03-2023
---
up:: [[§Areas of Interest]]
# ★Knowledge Work
- [ ] sort out what I want to do with this
- [ ] cf [[✶Thinking and Writing]]

---
## list of notes with this note as parent and not aoiHubs
```dataview
list
from ""
where up = this.file.link and noteType != "aoiHub"
sort file.name
```

### list of notes with knowledge-work as an aoi, excluding notes with ¶ 
```dataview
list
from "noteBooks/myndatlas/website"
where contains(aoiGroup, this.file.link) AND file.name != this.file.name and !contains(file.name, "¶")
sort file.name
```
