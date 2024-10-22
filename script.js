document.getElementById("signatureForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get user input
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const position = document.getElementById("position").value;
  const tokenizedFullNameWithDash = fullName.toLowerCase().replace(/\s/g, "-");

  const signatureTemplate = `
    <div>
        <table role="presentation" style="font-family: Helvetica, Arial, sans-serif; color: #0F0033;">
          <tbody>
            <tr>
              <td>
                <table role="presentation">
                  <tbody>
                    <tr>
                      <td style="font-size: 14px; color: #0F0033; font-weight: bold;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="font-size: 12px; color: #6F6685;">${position}</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="tel:+66 (0)2 258 3649" target="_blank" style="font-size: 12px; color: #0F0033; text-decoration: none !important; display: block; margin-bottom: 4px; margin-top: 12px;">${phoneNumber}</a>
                        <a href="https://nimblehq.co/?utm_source=email&utm_medium=email-signature&utm_campaign=${tokenizedFullNameWithDash}" target="_blank" style="font-size: 12px; color: #0F0033; text-decoration: none !important; display: block; margin-bottom: 12px;">nimblehq.co</a>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="social-icons">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;">
                            <a href="https://www.facebook.com/nimblehq" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none !important; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;">
                              Fb
                            </a>
                          </li>
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;">
                            <a href="https://www.instagram.com/nimble_hq/" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none !important; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;">
                              Ig
                            </a>
                          </li>
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;">
                            <a href="https://www.linkedin.com/company/nimblehq" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none !important; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;"">
                              In
                            </a>
                          </li>
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;">
                            <a href="https://dribbble.com/nimblehq" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;">
                              Db
                            </a>
                          </li>
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;"> 
                            <a href="https://www.behance.net/nimblehq" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none !important; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;">
                              Be
                            </a>
                          </li>
                          <li style="float: left; margin-right: 8px; margin-left: 0 !important;" >
                            <a href="https://medium.com/nimble" target="_blank" style="font-size: 12px; font-weight: bold; line-height: 24px; color: #0F0033; text-decoration: none !important; display: inline-block; text-align: center; width: 24px; height: 24px; background-color: #EEF2F5;">
                              M
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  `;

  // Display the generated signature in the preview area
  document.getElementById("signaturePreview").innerHTML = signatureTemplate;
});