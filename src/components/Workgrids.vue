<script>
export default{
    name: 'Workgrids',
}
</script>

<template>
    <div class="parent-flex">

        <div class="flex1">
            <div class="img1"><img src="/aboutgirls.avif" alt=""></div>
            <div class="img2"><img src="/computer.avif" alt=""></div>
            <div class="img3"><img src="/work3.jpeg" alt=""></div>
        </div>
        <div class="flex2">
            <div><img src="/work4.jpeg" alt=""></div>
            <div><img src="/work5.jpeg" alt=""></div>
        </div>
        <div class="flex3">
            <div>
                <div><img src="/work6.jpeg" alt=""></div>
                <div><img src="/work8.jpeg" alt=""></div>
            </div>
            <div>
                <div><img src="/work7.jpeg" alt=""></div>
                <div><img src="/work9.jpeg" alt=""></div>
            </div>
        </div>
        <div class="flex4">
            <div>
                <div>
                    <div><img src="/work10.jpeg" alt=""></div>
                    <div><img src="/work11.jpeg" alt=""></div>
                </div>
                <div><img src="/worklast.jpeg" alt=""></div>
            </div>
        </div>
        
    </div>
</template>

<style>
/* ---------------- MAIN LAYOUT ---------------- */

.parent-flex {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Shared row layout */
.flex1, .flex2, .flex3, .flex4 {
    display: flex;
    gap: 30px;
}

/* All image containers */
.parent-flex div {
    position: relative;
    overflow: hidden;
    border-radius: 25px;
}

/* All images fit container */
.parent-flex img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    /* Hover transition */
    transition: transform 0.6s ease, filter 0.6s ease;
}

/* Hover effect on ONLY the hovered image */
.parent-flex img:hover {
    transform: scale(1.08);
    filter: brightness(70%);
}

/* ---------------- DESKTOP SIZES ---------------- */

.flex1 {
    height: 50vh;
}
.img1 { flex-basis: 45%; }
.img2 { flex-basis: 20%; }
.img3 { flex-basis: 35%; }

.flex2 {
    height: 80vh;
}
.flex2 > div { flex: 1; }

.flex3 {
    height: 90vh;
}
.flex3 > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.flex4 {
    height: 90vh;
}
.flex4 > div {
    flex: 1;
    display: flex;
    gap: 30px;
}
.flex4 > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* ---------------- TABLET BREAKPOINT ---------------- */
@media (max-width: 900px) {

    .parent-flex{
        gap: 10px;
}

    .flex1 {
        height: 40vh;
        gap: 15px;
    }

    .flex2 {
        height: 60vh;
        gap: 15px;
    }

    .flex3,
    .flex4 {
        height: 70vh;
        gap: 15px;
    }

    .parent-flex div{
        border-radius: 20px;
    }
}

/* ---------------- MOBILE BREAKPOINT ---------------- */
@media (max-width: 600px) {

    /* Stack all rows vertically */
    .flex1, .flex2, .flex3, .flex4 {
        flex-direction: column;
        height: auto;
    }

    /* Reset inner flex */
    .flex3 > div,
    .flex4 > div,
    .flex4 > div > div {
        flex-direction: column;
    }

    .flex1 > div,
    .flex2 > div,
    .flex3 > div > div,
    .flex4 > div > div > div {
        height: 40vh; /* uniform mobile height */
    }

    /* Reduce gap on mobile */
    .parent-flex {
        gap: 10px;
    }

    .flex1,
    .flex2,
    .flex3,
    .flex4 {
        gap: 10px;
    }

    .parent-flex div{
        border-radius: 10px;
    }
}


</style>
