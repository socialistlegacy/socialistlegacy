+++
publishdate = {{ .Date }}
title = "{{ replace (index (split .Name "-") 2) "_" " " | title }}"
draft = false
authors = ["{{ print (index (split (replace (index (split .Name "-") 0) "_" " ") ", ") 1) " " (index (split (replace (index (split .Name "-") 0) "_" " ") ", ") 0) | title }}"]
authorsalpha = "{{ print (replace (index (split .Name "-") 0) "_" " ") | title }}"
translator = ""
genre = [""]
tags = [""]
year = ["{{ index (split .Name "-") 1 }}"]
firstpublished = ""
pdf = "{{ print "/pdfs/library/" .Name ".pdf" }}"
postsummary = """"""
+++
