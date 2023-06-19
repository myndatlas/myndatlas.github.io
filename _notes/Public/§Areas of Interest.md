---
title : §Areas of Interest
feed : show
date : 24-03-2023
---
up:: [[§Atlas]]
# §Areas of Interest

This note is key to the overall MyndAtlas concept - it is a selection of the Atlas that serves as a scaffold or framework of branches that the rest of the note-system hangs on. 

---
## groups of hubNotes grouped by groupNote
note: noteCards without a group show up just fine, but group notes without any attached noteCards will not show up on this dataview 
```dataviewjs
for (let group of dv.pages('"projects/myndatlas/website"')
  .where(p => p.noteType === "noteCard")
  .groupBy(p => p.projectHub)) {
    dv.header(3, group.key);
    dv.table([],
        group.rows
            .sort(k => k.file.name, 'asc')
            .map(k => [k.file.link]))
}
```

### table of hubNotes in noteCards folder
```dataview
TABLE WITHOUT ID
 file.link AS "File", 
 up,
 aoiGroup,
 aoiHub
FROM "projects/myndatlas/website"
WHERE noteType = "aoiHub"
SORT aoiGroup, parent
```

## notes with this note as parent
```dataview
list
from ""
where parent = this.file.link
```
