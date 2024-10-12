export default function ContactPage() {
    return (
        <div>
            <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Email Address</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-lg">Message</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
</div>
        </div>
    )
}