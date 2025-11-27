<script>
export default {
    name: 'Footer',
}
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <h1>T. KENSINGTON</h1>
      
      <div class="contact-info">
        <div class="social-icons">
        <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="#" target="_blank"> <i class="fab fa-x-twitter"></i></a>
        <a href="#" target="_blank"><i class="fab fa-tiktok"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
        <p>123-456-7890</p>
        <p>info@mysite.com</p>
        <p>500 Terry Francine St. San Francisco, CA 94158</p>
      </div>

      
    </div>

    <div class="footer-right">
      <div class="privacy-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Accessibility Statement</a>
      </div>
      <div class="copyright">
        <p>© 2035 by T. Kensington. Powered and secured by <a href="#">Wix</a></p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background-color: black;
  color: white;
  border-radius: 20px;
  gap: 20px;
  height: 40vh;
  margin-bottom: 30px;
  margin-top: 50px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  flex-basis: 60%;
}

.footer-left h1 {
  margin: 0;
  text-align: left;
  font-size: clamp(20px,4vw,50px);
}

.social-icons a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

.contact-info p {
  margin: 3px 0;
  font-size: 14px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 10px;
  flex-basis: 40%;
}

.privacy-links a {
  display: block;
  font-size: 14px;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
}

.privacy-links a:hover {
  text-decoration: underline;
}

.footer-right p {
  font-size: 12px;
  margin: 0;
}

.footer-right a {
  color: white;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 550px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-left, .footer-right {
    max-width: 100%;
    align-items: center;
  }
  .footer-right {
    margin-top: 20px;
  }
  .social-icons a {
    margin-right: 8px;
  }
}
</style>
