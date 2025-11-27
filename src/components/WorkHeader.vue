<script>
export default {
    name: 'WorkHeader',
}
</script>

<template>
    <div class="work-header">

        <div class="work-inner">
            <span v-threed>Portfolio</span>
            <h1 v-threed>EXPLORE OUR SUCCESSFUL PROJECTS</h1>
        </div>

    </div>
</template>

<style>

.work-header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20vh;
    margin-bottom: 15vh;
    padding-left: 60px;
}

/* Inner flex */
.work-inner {
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

/* Heading */
.work-inner h1 {
    text-align: left;
    font-size: clamp(26px, 6vw, 80px);
    font-weight: 700;
    line-height: 1.1;
}

/* Subtext */
.work-inner span {
    font-size: clamp(14px, 1.8vw, 24px);
    margin-bottom: 10px;
}

/* ---------- RESPONSIVE BREAKPOINTS ---------- */

/* Tablets */
@media (max-width: 900px) {
    .work-header {
        padding-left: 30px;
        margin-top: 15vh;
    }

    .work-inner {
        flex-basis: 100%;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .work-header {
        padding-left: 20px;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    .work-inner span {
        font-size: 14px;
    }

    .work-inner h1 {
        font-size: 9vw;  /* Matches responsive mobile heading sizes */
    }
}

</style>