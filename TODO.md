Priority (MVP):
-[ ] Review functionality
    -[ ] Next button
        - Working mode (next or create)
        - Error mode (visit flags first, then in order of questions red writing)
        - Question mode (attempts w/ unresolved questions
        - Encode CWD in `path` param (doesn't need to match `fileId` path)
-[ ] Method to resolve questions
-[x] File browser stats
    - [Some algorithm](https://www.desmos.com/calculator/roffemagoj) that computes likelihood of making another mistake.
    ```
    mistakes per attempt: 3, 2
    weights: .3, .7
    computed risk: 2.3 (weighted average, not a percentage)
    
    2, 3, 1
    .1, .3, .6
    1.7 (weighted) 2 (unweighted)
    
    2, 3, 1, 0
    .05, .15, .3, .5
    0.85 (weighted) 1.5 (unweighted)
    ```
    
Later Maybe
-[ ] Infinite panning
    - Regardless of whether I break each path or screen into one chunk, MultilayerCanvas needs the ability to
        - Know the position of chunks (needs slight schema change)
        - Render multiple imageDatas onto one Canvas (keep 3 canvas layers)
        - Add extra canvas working layer (draw on here until pen up, save ROI, then redraw on appropriate canvas
-[ ] Screen to view all mistakes
-[ ] Undo/redo
-[ ] Paste images from clipboard
-[ ] Serverless WebRTC syncing
    - Extend schema to include UUID for entities
