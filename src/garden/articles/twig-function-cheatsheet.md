---
title: 'Twig Function Cheatsheet'
date: '06/11/2020'
summary: 'Cheatsheet for various twig functions in Drupal 8'
---

[Functions in Twig Templates Documentation](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/functions-in-twig-templates)

### `url()`

```html
{{ url('user.login') }} 

{{ url('user.pass') }} 

{{ url('user.register') }} 

{{ url('user.register', { 'destination': '<some-route>' }) }} 

{{ url('entity.user.canonical') }} 

{{ url('<current>') }}

{{ url('<front>') }}
```

---

### `path()`

```html
{{ path('view.frontpage.page_1') }}

{{ path('entity.user.canonical', {'user': user.id}) }}

{{ path('entity.node.canonical', {'node': node.id}) }}

{{ path('node.add', {'node_type' : '<node_type>'}) }}
```