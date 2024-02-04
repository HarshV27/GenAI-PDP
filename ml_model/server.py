from flask import Flask, request, jsonify
from translate import translate_text

app = Flask(__name__)

@app.route('/health-check', methods=['GET'])
def healthCheck():
    try:
        return jsonify({"success" : "true"})
    except Exception as e:
        print(f'Error: {str(e)}')
        return jsonify(error='Internal Server Error'), 500
    
@app.route('/process_info', methods=['POST'])
def process_info():
    try:
        data = request.get_json()

        medicineInfoJson = data
        medicineInfoJson_translated = []
        langs = ["en", "ta", "te", "hi", "gu", "mr", "ml", "kn"]
        ques = []
        ans = []

        for pair in medicineInfoJson[0]["info"]:
            ques.append(pair["question"])
            ans.append(pair["answer"]) 
        
        
        for lang in langs:
            info_translated = []
            for q,a in zip(ques, ans):
                q_translated = translate_text(q, "en", lang)
                a_translated = translate_text(a, "en", lang)
                info_translated.append({"question": q_translated, "answer": a_translated})
            medicineInfoJson_translated.append({"language": lang, "info": info_translated})

        result_data = medicineInfoJson_translated

        return jsonify(result_data)
    
    except Exception as e:
        print(f'Error: {str(e)}')
        return jsonify(error='Internal Server Error'), 500

if __name__ == '__main__':
    app.run(port=3000)
