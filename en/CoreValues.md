---
layout: en/default
title: Core Values
comments: true
---


<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">

        <!-- Featured -->
        <section class="featured-posts">

            <div class="section-title text-center">
                <h1>Core Values Tutorials</h1>
            </div>

            <div class="row listfeaturedtag">

                {% for post in site.posts %}
                {% if post.language == page.lang %}

                {% if post.tag == "CoreValues" and post.featured == true %}

                {% include postlist.html %}

                {% endif %}
                {% endif %}
                {% endfor %}

            </div>

        </section>

        <!-- Featured -->
        <section class="all-posts">

            <div class="section-title text-center">
                <h1>Team Building Activities</h1>
            </div>

            <br><br><br>

            <div class="row listfeaturedtag">

            {% for post in site.posts %}

                {% if post.language == page.lang %}
                {% if post.tag == "CoreValues" %}
                    {% unless post.categories contains "draft" %}

                    {% include postlist.html %}
                {% endunless %}
            {% endif %}
{% endif %}
        {% endfor %}
        </div>

    </section>
