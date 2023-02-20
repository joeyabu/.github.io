    function Buttontoggle()
    {
        //btnに対応するHTML要素を抽出
        const t = document.getElementById("btn");
        //JSからHTMLに指示
        if(t.value=="おはよう"){
            t.value="こんにちは";
        }
        else if(t.value=="こんにちは"){
            t.value="こんばんは";
        }
        else if(t.value=="こんばんは"){
            t.value="おはよう";
        }

    }
