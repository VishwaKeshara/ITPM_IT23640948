import { test, expect } from '@playwright/test';

/**
 * Comprehensive Playwright Test Suite for Singlish-to-Sinhala Transliterator
 * Combining existing test structure with Excel test cases from Assignment_1_-_IT23640948.xlsx
 */


test('Pos_Fun_0001 - Convert a short daily Request phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oyaa hete udhe campus yanavadha? ');
  await page.getByText('ඔයා හෙටෙ උදෙ campus යනවද? ').click();
});

test('Pos_Fun_0003 - Convert a short request phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata  me Assignment ekata help karanna puLuvandha?');
  await page.getByText('මට  මෙ Assignment එකට help කරන්න පුළුවන්ද?').click();
});

test('Pos_Fun_0004 - Convert a short daily simple phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama udhenma gedhara yanavaa');
  await page.getByText('මම උදෙන්ම ගෙදර යනවා').click();
});

test('Pos_Fun_0006 - Slang/Informal expression of surprise', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ammata siri, eeka maru ne!');
  await page.getByText('අම්මට සිරි, ඒක මරු නේ!').click();
});

test('Pos_Fun_0007 - Convert a short daily request phrase with currency', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata bus ekata Rs. 150 k oone.');
  await page.getByText('මට bus එකට Rs. 150 ක් ඕනෙ.').click();
});

test('Pos_Fun_0008 - Convert a Polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa assignment deadline eka extend karanna.');
  await page.getByText('කරුණාකරලා assignment deadline එක extend කරන්න.').click();
});

test('Pos_Fun_0009 - Negative response to a request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka karanna baee.');
  await page.getByText('මට ඒක කරන්න බෑ.').click();
});

test('Pos_Fun_0010 - Simple daily phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('iiyee exam eka godak amaaruyi.');
  await page.getByText('ඊයේ exam එක ගොඩක් අමාරුයි.').click();
});

test('Pos_Fun_0011 - Convert a Simple greeting + Slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kohomadha machan, vaeda ivaradha?');
  await page.getByText('කොහොමද මචන්, වැඩ ඉවරද?').click();
});

test('Pos_Fun_0012 - Convert a simple Question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa inne canteen ekedha library ekedha?');
  await page.getByText('ඔයා ඉන්නේ canteen එකෙද library එකෙද?').click();
});

test('Pos_Fun_0015 - Complex English abbreviation usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata OTP eka sms ekak vidhihata aava.');
  await page.getByText('මට OTP එක sms එකක් විදිහට ආව.').click();
});

test('Pos_Fun_0017 - Input containing a date', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('project presentation eka may 20.');
  await page.getByText('project presentation එක may 20.').click();
});

test('Pos_Fun_0018 - Input containing specific time', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Mata class eka thiyenne 8.30 AM ta.');
  await page.getByText('මට class එක තියෙන්නෙ 8.30 AM ට.').click();
});

test('Pos_Fun_0019 - Future tense plan with friends', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api iilaGA  vacation ekee trip ekak yamu.');
  await page.getByText('අපි ඊලඟ  vacation එකේ trip එකක් යමු.').click();
});

test('Pos_Fun_0020 - Imperative command phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata pdf eka whatsapp karanna.');
  await page.getByText('මට pdf එක whatsapp කරන්න.').click();
});

test('Pos_Fun_0021 - Interrogative question phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Adha lecture eka patan ganne kiiyatadha?');
  await page.getByText('අද lecture එක පටන් ගන්නෙ කීයටද?').click();
});

test('Pos_Fun_0024 - Plural pronoun usage in a group context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaalaa okkoma library enavadha?');
  await page.getByText('ඔයාලා ඔක්කොම library එනවද?').click();
});



test('Pos_Fun_0002 - Long mixed-language input with slang + typo', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('machan mata adha havasata cricket gahanna enna bariveyi. apee gedharin booleyi bat ekayi aran yanna puLuvandha? mata havasa class ivara velaa ethent enna try ekak dhennam.thx');
  await page.getByText('මචන් මට අද හවසට cricket ගහන්න එන්න බරිවෙයි. අපේ ගෙදරින් බෝලෙයි bat එකයි අරන් යන්න පුළුවන්ද? මට හවස class ඉවර වෙලා එතෙන්ට් එන්න try එකක් දෙන්නම්.තx').click();
});

test('Pos_Fun_0005 - Long mixed-language input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha havasa 5 ta meeting ekak thiyenava. oyaata puluvannam enna. naeththam record eka ahanna. api project eka gaena katha karanava');
  await page.getByText('අද හවස 5 ට meeting එකක් තියෙනව. ඔයාට පුලුවන්නම් එන්න. නැත්තම් record එක අහන්න. අපි project එක ගැන කත කරනව').click();
});

test('Pos_Fun_0013 - Informal request phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('havasata kuppiyak thiyanvalu ekta varen anivaaren ');
  await page.getByText('හවසට කුප්පියක් තියන්වලු එක්ට වරෙන් අනිවාරෙන් ').click();
});

test('Pos_Fun_0014 - Request with technical English terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaage laptop ekee thiyena final project file eka mata ikmanata email karanna puluvandha?');
  await page.getByText('ඔයාගෙ laptop එකේ තියෙන final project file එක මට ඉක්මනට email කරන්න පුලුවන්ද?').click();
});

test('Pos_Fun_0016 - Repeated words for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('anee mandha eyaa hinaa vela hinaa vela kathaa kalaa.');
  await page.getByText('අනේ මන්ද එයා හිනා වෙල හිනා වෙල කතා කලා.').click();
});

test('Pos_Fun_0022 - Compound sentence about studying', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('assignment eka ivara karalama mama nidhaagannava.');
  await page.getByText('assignment එක ඉවර කරලම මම නිදාගන්නව.').click();
});

test('Pos_Fun_0023 - Complex sentence with a condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('sir aave naeththam api canteen ekata yamu.');
  await page.getByText('sir ආවෙ නැත්තම් අපි canteen එකට යමු.').click();
});



test('Neg_Fun_0001 - Joined words cause incorrect segmentation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaa');
  // Expected to fail - system cannot segment joined words
  await page.getByText('මමගෙදරයණවා').click();
});

test('Neg_Fun_0002 - Multiple spaces distort output formatting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata   bath   oonee');
  // Expected to fail - multiple spaces are preserved incorrectly
  await page.getByText('මට   බත්   ඕනේ').click();
});

test('Neg_Fun_0003 - Slang words partially untranslated', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan supiri');
  // Expected to fail - slang not fully recognized
  await page.getByText('එල මචන් සුපිරි').click();
});

test('Neg_Fun_0004 - Heavy slang misconverted', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('supiri!! adoo vaedak baaragaththaanam eka…');
  // Expected to fail - word order incorrect
  await page.getByText('සුපිරි!! අඩෝ වැඩක් බාරගත්තානම් එක…').click();
});

test('Neg_Fun_0005 - Typo variation produces wrong output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamacmps yanavaa ');
  // Expected to fail - typo causes wrong Sinhala letters
  await page.getByText('මමcම්ප්ස් යනවා').click();
});

test('Neg_Fun_0006 - Repeated emphasis incomplete', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('harihari eeka eeka');
  // This test passes but shows incomplete repetition handling
  await page.getByText('හරිහරි ඒක ඒක').click();
});

test('Neg_Fun_0007 - Paragraph input without spaces truncated', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhitvasulikuNatuvanisa manussajiivithagodakvinaashauna');
  // Expected to fail - formatting mishandled
  await page.getByText('දිට්වසුලිකුණටුවනිස මනුස්සජීවිතගොඩක්විනාශෞන').click();
});

test('Neg_Fun_0008 - Line breaks cause conversion issues', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara\\nyanavaa.\\noya enavadha?');
  // Expected to fail - line breaks break conversion
  await page.getByText('මම ගෙදර\\න්යනවා.\\නොය එනවද?').click();
});

test('Neg_Fun_0009 - Abbreviations remain unchanged', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ID NIC OTP');
  // Abbreviations should remain as-is (this is actually correct behavior)
  await page.getByText('ID NIC OTP').click();
});

test('Neg_Fun_0010 - Joined long input garbled', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaahetapiyanavaavaessa..');
  // Expected to fail - garbled output
  await page.getByText('ממගෙදරයනවාහැටපියනවාවැස්ස..').click();
});



test('Neg_Ui_0001 - Special chars spam', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('!??!!??');
  // Special characters remain unchanged
  await page.getByText('!??!!??').click();
});

test('Pos_Ui_0002 - Real-time conversion behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  
  // Type character by character to test real-time updates
  await inputBox.fill('jaQQgama dhurakaThanaya');
  
  // Verify the Sinhala output appears
  await page.getByText('ජංගම දුරකථනය').click();
});