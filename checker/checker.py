import requests
import json
import unittest

class TestChecker(unittest.TestCase):

    def setUp(self):
        self.api_url = "https://emkc.org/api/v2/piston/execute"
        self.js_code = """
const input = JSON.parse(process.stdin.read());  

function exam01(alice, bob) {
    let c1 = 0; // Initialize c1 to 0
    let c2 = 0; // Initialize c2 to 0
    for (let index = 0; index < alice.length; index++) {
        if (alice[index] > bob[index]) {
            c1++;
        } else if (bob[index] > alice[index]) {
            c2++;
        }
    }
    return [c1, c2]; // This will return the final scores
}

// Call the function and print the result
const result = exam01(input.alice, input.bob);
console.log(JSON.stringify(result));
"""


        self.input_data = {
            "alice": [5,10],
            "bob": [10,20]
        }

    def test_execute_js_code(self):
        payload = {
            "language": "javascript",
            "version": "18.15.0",
            "files": [{
                "name": "main.js",
                "content": self.js_code
            }],
            "stdin": json.dumps(self.input_data)
        }
        
        response = requests.post(self.api_url, json=payload)
        
        self.assertEqual(response.status_code, 200)
        
        result = response.json()
        output = result['run']['stdout'].strip()
        expected_output = json.dumps([0, 2])  # Adjusted expected output
        
        self.assertEqual(output, expected_output)

if __name__ == "__main__":
    unittest.main()
