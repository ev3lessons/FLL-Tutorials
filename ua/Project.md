---
layout: ua/default
title: Coach's Corner
comments: true
---


<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">

        <!-- Featured
        ================================================== -->
        <section class="all-posts">

        <div class="section-title text-center">
            <h1>Project</h1>
        </div>
<br><br><br>
            <div class="row listfeaturedtag">

            {% for post in site.posts %}
                {% if post.language == page.lang %}
                    {% if post.tag == "Project" %}
                        {% unless post.categories contains "draft" %}

                            {% include postlist.html %}
                        {% endunless %}
                    {% endif %}
                {% endif %}
            {% endfor %}

            </div>

        </section>
