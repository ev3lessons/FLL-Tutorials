---
layout: default
title: Worksheets
comments: true
---


<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">

        <!-- Featured
        ================================================== -->
        <section class="all-posts">

        <div class="section-title text-center">
            <h1>Worksheets</h1>
        </div>
<br><br><br>
            <div class="row listfeaturedtag">

<h2> CITY SHAPER Worksheets [Coming Soon!] </h2> <br>
- Learn the Missions<br>
- Mission Evaluation Worksheets<br>
- Strategy Planning Worksheets<br>
- Robot Design Worksheets<br>
- Pseudocode Worksheets<br>
- Project Selection Worksheets<br>
- Learn the Core Values<br>



            {% for post in site.posts %}

                {% if post.tag == "Worksheets" %}
                    {% unless post.categories contains "draft" %}

                        {% include postlist.html %}
                    {% endunless %}
                {% endif %}

            {% endfor %}

            </div>

        </section>
