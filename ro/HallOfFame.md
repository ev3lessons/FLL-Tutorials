---
layout: ro/default
title: Hall of Fame
comments: true
---


<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">
<div class="section-title text-center">

<h1>FIRST LEGO League Hall of Fame</h1>
</div>

Teams entered in this Hall of Fame reflect the best of the best. They have a strong track record, a unique identity, and they set a great example for teams everywhere. They are World Festival Champion's Award winners and other high performing teams who have attended World Festival multiple times. We hope that reading about these teams will give you some tips and help inspire your own journey through FIRST LEGO League.
<br><br><br>

        <section class="all-posts">

            <div class="row listfeaturedtag">

            {% for post in site.posts %}
                {% if post.language == page.lang %}

                {% if post.tag == "HallOfFame" %}
                    {% unless post.categories contains "draft" %}

                        {% include featuredbox.html %}
                    {% endunless %}
                {% endif %}
{% endif %}
            {% endfor %}

            </div>

        </section>
