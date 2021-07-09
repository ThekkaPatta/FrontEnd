import { Component } from "react";
import '../assets/css/workpost.css'

class Workpost extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div class="section-content">
                        <h1 class="section-header"><span class="content-header wow fadeIn " data-wow-delay="0.2s"
                            data-wow-duration="2s">POST the WORK that needs to be done</span></h1>
                    </div>
                    <div class="contact-section">
                        <div class="container">
                            <form>
                                <div class="col-md-6 form-line">
                                    <div class="form-group">
                                        <label for="exampleInputUsername">Your name</label>
                                        <input type="text" class="form-control" id="" placeholder=" Enter Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail">Email Address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail"
                                            placeholder=" Enter Email id" />
                                    </div>
                                    <div class="form-group">
                                        <label for="picture">Picture</label>
                                        <input type="file" class="form-control" id="picture"
                                            placeholder=" Upload the picture" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputtext">Tags</label>
                                        <select name="tags" id="tags">
                                            <option value="plumber">Plumber</option>
                                            <option value="mechanic">Mechanic</option>
                                            <option value="Construction">Construction</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="description"> Work Description</label>
                                        <textarea class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div>

                                        <button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane"
                                            aria-hidden="true"></i> Post the work</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        </div>
	            </section>
            </div>
        )
    }
}
export default Workpost
