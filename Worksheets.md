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

# CITY SHAPER Worksheets [Coming Soon!]
- Learn the Missions
- Mission Evaluation Worksheets
- Strategy Planning Worksheets
- Robot Design Worksheets
- Pseudocode Worksheets
- Project Selection Worksheets
- Learn the Core Values

# INTO ORBIT Worksheets
- [Mission Evaluation Worksheets](http://flltutorials.com/translations/en-us/RobotGame/StrategyWorksheet.pdf)
- [Pseudocode Worksheets](http://flltutorials.com/translations/en-us/RobotGame/PseudocodeWorksheet.pdf)


            {% for post in site.posts %}

                {% if post.tag == "Worksheets" %}
                    {% unless post.categories contains "draft" %}

                        {% include postlist.html %}
                    {% endunless %}
                {% endif %}

            {% endfor %}

            </div>

        </section>
