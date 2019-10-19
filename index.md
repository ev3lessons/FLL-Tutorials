---
layout: default
title: Home
---

</div>
</div>
<!-- We've temporary closed main-content and container to have a full width intro -->    


<!-- Home Jumbotron
================================================== -->    
<section class="intro">
    <div class="wrapintro">
        <h1>FLL Tutorials<br>teach - share - learn</h1>
        <h2 class="lead">This website is powered by FRC 8027 who are MINDSTORMS Community Partners, founders of EV3Lessons, and the 2018 World Festival Champion's award winners.
        <br> <br>
        Through this website, we hope to share our knowledge, as well best practices for getting the most out of your FIRST LEGO League journey. Our goal is to teach, share, and learn together.</h2>    


    </div>
</section>   

<!-- We reopen main-content and container -->

<div class="container-fluid">

    <div class="main-content">

    <section id="services">
        <div class="container-fluid">

            <div class="row">
            <div class="col-sm-4">
                {% include sidebar.html %}
            </div>
            <div class="col-sm-8">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">FIRST LEGO League</h2>
                    <h3 class="section-subheading text-muted">Resources for all three parts of FIRST LEGO League</h3>
                </div>
            </div>
                        <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-cog fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading"> <a href="{{ site.baseurl }}/RobotGame.html">Robot Game</a></h4>
                    <p class="text-muted">This section has resources designed for the Robot Game portion of the competition. It includes robot designs.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-heart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading"> <a href="{{ site.baseurl }}/CoreValues.html">Core Values</a></h4>
                    <p class="text-muted">This section features over forty Core Value activities. It also includes Core Values posters and a t-shirt design. </p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-rocket fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading"> <a href="{{ site.baseurl }}/Project.html">Project</a></h4>
                    <p class="text-muted">This section features resources for the project portion of the competition. It includes lessons about the entire research project process.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </section>


        <!-- Featured
        ================================================== -->
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Featured Posts</h2>
            </div>
        </div>
        <br><br>
        <section class="featured-posts">

                <div class="row listfeaturedtag">

                    {% for post in site.posts %}

                        {% if post.featured == true %}

                            {% include featuredbox.html %}

                        {% endif %}

                    {% endfor %}

                </div>

        </section>
