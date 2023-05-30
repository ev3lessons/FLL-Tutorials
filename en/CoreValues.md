---
layout: en/default
title: Core Values
comments: true
---


<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">


        <!-- Featured
        ================================================== -->
        <section class="featured-posts">

            <div class="section-title text-center">
                <h2><span>Core Values Tutorials/span></h2>
            </div>

            <div class="row listfeaturedtag">

            {% for post in site.posts %}
                {% if post.language == page.lang %}

                {% if post.tag == "CoreValues" and post.featured == true %}

                    {% include featuredbox.html %}

                {% endif %}
{% endif %}
            {% endfor %}

            </div>

        </section>

        <!-- Featured
        ================================================== -->
        <section class="all-posts">

            <div class="section-title text-center">
                <h2><span>Team Building Activities</span></h2>
            </div>

            <div class="row listfeaturedtag">

            {% for post in site.posts %}

                {% if post.language == page.lang %}
                {% if post.tag == "CoreValues" %}
                    {% unless post.categories contains "draft" %}

                        {% include featuredbox.html %}
                    {% endunless %}
                {% endif %}
{% endif %}
            {% endfor %}

            </div>

        </section>
