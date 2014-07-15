<#import "boilerplates/html.ftl" as bp>

<@bp.html>
<body class="navbar-fixed">
    <#include "boilerplates/chrome-frame.ftl">

    <!--[if !IE]> -->
    <script src="scripts/coala/require-config.js"></script>
    <script src="scripts/require-config.js"></script>
    <script data-main="scripts/main.js" src="scripts/coala/vendors/require/require.js"></script>
    <!-- <![endif]-->
    <!--<script src="scripts/coala/coala.js"></script>-->
</body>
</@bp.html>
