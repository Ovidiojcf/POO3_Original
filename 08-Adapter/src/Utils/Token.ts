export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVudmlhbmRvIGUgcmVjZWJlbmRvIHBhZ2FtZW50b3MifQ.8r119FKZBaO2_SBxZ8N5nwDdkuTe8K2Olywd3u1B_AY";
    
    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}