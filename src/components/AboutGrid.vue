<script>
export default {
    name: 'AboutGrid',

}
</script>

<template>
    <div>
        <div class="about-grid-parent">
            <div class="about-grid-div1">
                <img src="/b&w.avif" alt="">
            </div>
            <div class="about-grid-div2"> </div>
            <div class="about-grid-div3"> </div>
            <div class="about-grid-div4">
                <img src="/pattern.avif" alt="">
            </div>
            <div class="about-grid-div5">
                <img src="/guy on laptop.avif" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.about-grid-parent {
    margin: 40px 0px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 450px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
}

.about-grid-parent>div {
    border-radius: 25px;
}

.about-grid-div1 {
    grid-area: 1 / 1 / 3 / 4;
    overflow: hidden;
}

.about-grid-div1 img,
.about-grid-div4 img,
.about-grid-div5 img {
    object-fit: cover;
    width: 100%;
}

.about-grid-div2 {
    grid-area: 1 / 4 / 2 / 5;
    background-color: #404040;
}

.about-grid-div3 {
    grid-area: 2 / 4 / 3 / 5;
    background-color: black;
}

.about-grid-div4 {
    grid-area: 3 / 1 / 5 / 3;
    overflow: hidden;
}

.about-grid-div5 {
    grid-area: 3 / 3 / 5 / 5;
    overflow: hidden;
}

@media(max-width:1150px) {
    .about-grid-parent {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 350px);
    }

    .about-grid-div1 {
        grid-area: 1 / 1 / 3 / 3;
    }

    .about-grid-div2 {
        grid-area: 3 / 1 / 4 / 2;
    }

    .about-grid-div3 {
        grid-area: 3 / 2 / 4 / 3;
    }

    .about-grid-div4 {
        grid-area: 4 / 1 / 6 / 2;
    }

    .about-grid-div5 {
        grid-area: 4 / 2 / 6 / 3;
    }
}

@media(max-width:945px){
    .about-grid-parent{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(7, 350px);
    }

    .about-grid-div1 {
        grid-area: 1 / 1 / 3 / 2;
    }

    .about-grid-div2 {
        grid-area: 3 / 1 / 4 / 2;
    }

    .about-grid-div3 {
        grid-area: 4 / 1 / 5 / 2;
    }

    .about-grid-div4 {
        grid-area: 5 / 1 / 6 / 2;
    }

    .about-grid-div5 {
        grid-area: 6 / 1 / 8 / 2;
    }
}

@media(max-width:671px){
    .about-grid-parent{
        grid-template-rows: repeat(7, 250px);
        gap: 10px;
    }


}

@media(max-width:490px){
    .about-grid-parent{
        grid-template-rows: repeat(7, 200px);
    }
}

@media(max-width:415px){
    .about-grid-parent{
        grid-template-rows: repeat(7, 150px);
    }
}
</style>