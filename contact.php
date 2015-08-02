<?php 
	$addr = $_SERVER['PHP_SELF'];
	if ($addr == "/index.php") {
	    include 'header.php';
	} else {
	    include 'headernoindex.php';
	}
?>

<div class="contactBl">
	<div class="contactInfo">
		<h1>Контакты</h1>
		<div class="contactLeft">
			<p>123456, г. Москва ул. Космонавта Волкова дом 6</p>
			<p>+7 (495) 555 55 55</p>
			<p>info@ukbs-dev.ru</p>
		</div>
		<div class="contactRight">
			<div class="howToCome">
				<p class="howToComeTitle">Проезд</p>
				<p class="howToComeText">Группа компаний Data Dextra предлагает весь комплекс услуг по управлению, эксплуатации и охране коттеджных поселков. Во всех поселках и домовладениях, которые взяты на обслуживание профессионалами Data Dextra, для жителей создаются условия максимально приближенные к городским по уровню комфорта и безопасности проживания.</p>
			</div>
		</div>
	</div>
	<div class="contactMap">
		<script type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=P76P5hIt3iI170v_WVygWggh309t7Dfr&height=640"></script>
	</div>
</div>


<?php include 'footer.php' ?>