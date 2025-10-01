---
title: Actions System | आपका संवैधानिक निर्णय
description: Hatcher के Actions सिस्टम को समझें - नियतात्मक गुणवत्ता गेट जो प्रत्येक परिवर्तन को मान्य करते हैं। अंतिम निर्णय जो सुनिश्चित करता है कि आपका कोड आपके संवैधानिक मानकों को पूरा करता है।
---

# Hatcher Actions: आपका संवैधानिक निर्णय

Actions Hatcher इकोसिस्टम के गुणवत्ता गेट हैं—संवैधानिक न्यायाधीश जो यह निर्धारित करते हैं कि आपका कोड आपके मानकों को पूरा करता है या नहीं। वे वर्कफ़्लो या प्रक्रियाएं नहीं हैं; वे परमाणु, नियतात्मक सत्यापनकर्ता हैं जो एक सरल प्रश्न का उत्तर देते हैं: **"पास या फेल?"**

## Actions क्या हैं?

Actions हैं:

- **परमाणु सत्यापनकर्ता**: एकल-उद्देश्य जांच जो एक विशिष्ट पहलू को मान्य करती है
- **नियतात्मक**: समान इनपुट के लिए हमेशा समान परिणाम उत्पन्न करते हैं
- **बाइनरी**: केवल "पास" या "फेल" (विवरण के साथ) लौटाते हैं
- **तेज़**: जटिल प्रसंस्करण के लिए नहीं, तेज़ प्रतिक्रिया के लिए डिज़ाइन किए गए

वे अंतिम चेकपॉइंट हैं जो सुनिश्चित करते हैं कि कोड का प्रत्येक टुकड़ा आपके प्रोजेक्ट के संविधान का सम्मान करता है।

## पदानुक्रम में भूमिका

Actions को समझने के लिए Hatcher दर्शन में उनके स्थान को समझने की आवश्यकता होती है:

1. **Playbooks** (रणनीति): परिभाषित करें कि आप क्या मानक लागू करना चाहते हैं
2. **Autopilots** (रणनीति): उन मानकों को कैसे लागू करना है निष्पादित करें
3. **Actions** (निर्णय): मान्य करें कि क्या कार्यान्वयन मानकों को पूरा करता है

```yaml
# पूर्ण प्रवाह
playbook: 'हम TypeScript के साथ Vue 3 का उपयोग करते हैं'
autopilot: 'TypeScript के साथ एक Vue 3 कंपोनेंट उत्पन्न करें'
actions: 'शुद्धता सत्यापित करने के लिए type-check, lint और test चलाएं'
```

## मुख्य Actions

Hatcher सार्वभौमिक गुणवत्ता गेट के लिए आवश्यक Actions प्रदान करता है:

### टाइप सुरक्षा Actions

```yaml
actions:
  - name: types:validate
    description: TypeScript संकलन सत्यापित करें
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: सख्त TypeScript नियम लागू करें
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### कोड गुणवत्ता Actions

```yaml
actions:
  - name: lint:check
    description: सत्यापित करें कि कोड लिंटिंग मानकों को पूरा करता है
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: कोड फॉर्मेटिंग जांचें
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### टेस्टिंग Actions

```yaml
actions:
  - name: test:unit
    description: यूनिट टेस्ट चलाएं
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: इंटीग्रेशन टेस्ट चलाएं
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: सुनिश्चित करें कि टेस्ट कवरेज थ्रेशोल्ड को पूरा करता है
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### सुरक्षा Actions

```yaml
actions:
  - name: security:audit
    description: ज्ञात कमजोरियों की जांच करें
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: सुनिश्चित करें कि कोड में कोई सीक्रेट नहीं है
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### प्रदर्शन Actions

```yaml
actions:
  - name: bundle:size
    description: बंडल साइज़ सीमाएं सत्यापित करें
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Lighthouse स्कोर की जांच करें
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## कस्टम Actions

अपने `hatcher.config.json` में प्रोजेक्ट-विशिष्ट Actions परिभाषित करें:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "API अनुबंधों को मान्य करें",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "डेटाबेस माइग्रेशन सत्यापित करें",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "अनुवाद पूर्णता जांचें",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Action निष्पादन

### व्यक्तिगत Actions

मांग पर विशिष्ट Actions चलाएं:

```bash
# एक एकल action चलाएं
hatcher action run test:unit

# वर्बोस आउटपुट के साथ चलाएं
hatcher action run lint:check --verbose

# कस्टम पैरामीटर के साथ चलाएं
hatcher action run coverage:verify --threshold=90
```

### Action समूह

संबंधित Actions को एक साथ निष्पादित करें:

```bash
# सभी टेस्ट actions चलाएं
hatcher action run-group testing

# pre-commit actions चलाएं
hatcher action run-group pre-commit

# डिप्लॉयमेंट सत्यापन चलाएं
hatcher action run-group deploy-checks
```

### Action कॉन्फ़िगरेशन

अपने कॉन्फ़िगरेशन में Action समूह परिभाषित करें:

```json
{
  "actionGroups": {
    "pre-commit": [
      "format:verify",
      "lint:check",
      "types:validate",
      "test:unit"
    ],
    "pre-deploy": [
      "test:integration",
      "coverage:verify",
      "security:audit",
      "bundle:size"
    ],
    "quality": ["lint:check", "types:strict", "coverage:verify"]
  }
}
```

## Action परिणाम

Actions संरचित प्रतिक्रिया प्रदान करते हैं:

```json
{
  "action": "test:unit",
  "status": "fail",
  "duration": 3420,
  "details": {
    "total_tests": 142,
    "passed": 140,
    "failed": 2,
    "failures": [
      {
        "test": "UserService.authenticate",
        "error": "Expected true, received false",
        "file": "services/user.spec.ts",
        "line": 47
      }
    ]
  },
  "suggestion": "कमिट करने से पहले असफल टेस्ट ठीक करें"
}
```

## Autopilots के साथ इंटीग्रेशन

Autopilots गुणवत्ता चेकपॉइंट के रूप में Actions का उपयोग करते हैं:

```yaml
# एक Autopilot वर्कफ़्लो में
name: फीचर कार्यान्वयन
steps:
  - name: कोड उत्पन्न करें
    action: ai.create

  - name: गुणवत्ता चेकपॉइंट
    action: run.actions
    actions:
      - lint:check # पास होना चाहिए
      - types:validate # पास होना चाहिए
      - test:unit # पास होना चाहिए
    fail_fast: true # पहली विफलता पर रुकें

  - name: यदि गुणवत्ता पास हो गई तो कमिट करें
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Action नीतियां

परिभाषित करें कि Actions कब अनिवार्य हैं:

```json
{
  "policies": {
    "pre-commit": {
      "required": ["lint:check", "types:validate"],
      "recommended": ["test:unit"]
    },
    "pre-merge": {
      "required": ["test:unit", "test:integration", "coverage:verify"],
      "threshold": {
        "coverage": 80,
        "performance": 85
      }
    },
    "pre-deploy": {
      "required": ["security:audit", "test:integration", "bundle:size"],
      "block_on_failure": true
    }
  }
}
```

## सर्वोत्तम प्रथाएं

### Action डिज़ाइन सिद्धांत

1. **एकल जिम्मेदारी**: प्रत्येक Action बिल्कुल एक चीज़ को मान्य करता है
2. **तेज़ निष्पादन**: Actions को सेकंड में पूरा होना चाहिए, मिनटों में नहीं
3. **स्पष्ट विफलता संदेश**: विफलताओं पर कार्रवाई योग्य प्रतिक्रिया प्रदान करें
4. **नियतात्मक**: समान इनपुट हमेशा समान परिणाम उत्पन्न करता है
5. **कोई साइड इफेक्ट नहीं**: Actions मान्य करते हैं लेकिन संशोधित नहीं करते

### प्रदर्शन अनुकूलन

- **समानांतर निष्पादन**: स्वतंत्र Actions को एक साथ चलाएं
- **वृद्धिशील जांच**: संभव होने पर केवल बदली गई फ़ाइलों को मान्य करें
- **कैशिंग**: अपरिवर्तित कोड के लिए परिणाम कैश करें
- **शीघ्र निकास**: महत्वपूर्ण उल्लंघनों पर तेज़ी से विफल हों

### त्रुटि हैंडलिंग

Actions को स्पष्ट, कार्रवाई योग्य त्रुटि संदेश प्रदान करना चाहिए:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "कोड गुणवत्ता मुद्दों का पता चला",
  "fixes": {
    "automatic": "12 मुद्दों को स्वतः ठीक करने के लिए 'npm run lint:fix' चलाएं",
    "manual": "3 मुद्दों को मैनुअल हस्तक्षेप की आवश्यकता है",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' परिभाषित है लेकिन कभी उपयोग नहीं किया गया"
      }
    ]
  }
}
```

## संवैधानिक निर्णय की शक्ति

Actions आपके कोड गुणवत्ता के संरक्षक हैं—गैर-परक्राम्य मानक जिन्हें कोड के प्रत्येक टुकड़े को पूरा करना होगा। वे सुझाव या दिशानिर्देश नहीं हैं; वे आपके कोडबेस के संवैधानिक कानून हैं।

सत्यापन (Actions) को कार्यान्वयन (Autopilots) और रणनीति (Playbooks) से अलग करके, Hatcher कोड गुणवत्ता सुनिश्चित करने के लिए एक स्पष्ट, रखरखाव योग्य और स्केलेबल प्रणाली बनाता है।

याद रखें: **Actions बनाते या संशोधित नहीं करते—वे न्याय करते हैं। और उनका निर्णय अंतिम है।**

<PageCTA
  title="अपने मानकों को स्वचालित रूप से लागू करें"
  subtitle="अटूट सत्यापन नियम बनाएं जो आपकी कोड गुणवत्ता की रक्षा करते हैं"
  buttonText="अपने Actions कॉन्फ़िगर करें"
  buttonLink="/hi/getting-started"
  buttonStyle="secondary"
  footer="कोई समझौता नहीं। कोई अपवाद नहीं। आपके मानक, लागू।"
/>
