# stencil-styling-issues-with-non-standard-boolean-attr-support

This shows that Stencil's default behavior for parsing the non-standard "true"/"false" boolean attribute values can lead to mixed styling or unnecessary boilerplate CSS  

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm run start`

The component will be shown in `on`/`off` states for both spec and non-spec compliant sections. Note that `off` state in the non-spec compliant section shows `on` styling compared to the other example.