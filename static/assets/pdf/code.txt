val filtered = data2.data.filter { it.bulan == bulan }
        val median = filtered[0].median
        val diff = et_bb.text.toString().toDouble() - median
        var simpangan = if (diff >= 0) {
            filtered[0].plus1 - median
        } else {
            median - filtered[0].min1
        }
        val zScoreBB = diff / simpangan
        val statusGizi =
            if (zScoreBB < -3.0) {
                "Berat Badan Sangat Kurang"
            } else if (zScoreBB < -2.0 && zScoreBB >= -3.0) {
                "Berat Badan Kurang"
            } else if (zScoreBB <= 1.0 && zScoreBB >= -2.0) {
                "Berat Badan Normal"
            } else {
                "Resiko Berat Badan Lebih"
            }
        val filteredData1=data1.data.filter { it.bulan==bulan }
        val medianData1=filteredData1[0].median
        val diffData1=et_tb.text.toString().toDouble() - medianData1
        var simpanganData1=if(diffData1>=0){
            filteredData1[0].plus1-medianData1
        }else{
            medianData1 - filteredData1[0].min1
        }
        val zScoreTB=diffData1/simpanganData1
        val statusTB =
            if (zScoreTB < -3.0) {
                "Sangat Pendek"
            } else if (zScoreTB < -2.0 && zScoreTB >= -3.0) {
                "Pendek"
            } else if (zScoreTB <= 3.0 && zScoreTB >= -2.0) {
                "Normal"
            } else {
                "Tinggi"
            }
        val tb = et_tb.text.toString().toDouble()
        logE("tb = $tb")
        val filteredData3=data3.data.filter { it.tb == tb }
        logE("tb sek dientuk = ${filteredData3}")
        val medianData3=filteredData3[0].median
        val diffData3=et_bb.text.toString().toDouble() - medianData3
        val simpanganData3=if(diffData3>=0){
            filteredData3[0].plus1-medianData3
        }else{
            medianData3 - filteredData3[0].min1
        }
        val zScoreBBTB = diffData3/simpanganData3
        logE("zScore : $zScoreBBTB")
        val statusBBTB =
            if (zScoreBBTB < -3.0) {
                "Gizi Buruk"
            } else if (zScoreBBTB < -2.0 && zScoreBBTB >= -3.0) {
                "Gizi Kurang"
            } else if (zScoreBBTB <= 1.0 && zScoreBBTB >= -2.0) {
                "Gizi Normal"
            } else if (zScoreBBTB <= 2.0 && zScoreBBTB > 1.0) {
                "Beresiko Gizi Lebih"
            }  else if (zScoreBBTB <= 3.0 && zScoreBBTB > 2.0) {
                "Gizi Lebih"
            } else {
                "Obesitas"
            }

