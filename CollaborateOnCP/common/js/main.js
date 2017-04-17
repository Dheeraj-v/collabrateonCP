//side nav bar
jQuery("#showmenu").click(function (e) {
    e.preventDefault();
    jQuery("#menu").toggleClass("show");
    jQuery("#page-wrapper").toggleClass("full-width-page-wrapper half-width-page-wrapper");
    jQuery("#showmenu").toggleClass("showmenu-left");
    if (jQuery("#menu").hasClass("show")) {

//        jQuery(".nav-menu-links span:first-child").css({"float": "left", "padding-left": "0"});
//        jQuery(".nav-menu-links span:first-child").removeClass("menu-hover-sidebar");
//        jQuery(".user-image-section img").css({"float": "left"});
//        jQuery("#page-wrapper").css({"padding-left": "0"});
//        jQuery(".qurey-service-text").css({"padding-left": "0"});
    }
    else {
//        jQuery(".nav-menu-links span:first-child").css({"float": "right", "padding-left": "15px"});
//        jQuery(".nav-menu-links span:first-child").addClass("menu-hover-sidebar");
//        jQuery(".user-image-section img").css({"float": "right"});
//        jQuery("#page-wrapper").css({"padding-left": "86px"});
//        jQuery(".qurey-service-text").css({"padding-left": "60"});
    }
//    if(jQuery(".nav .nav-menu-links").hasClass('active')){
    jQuery(".nav .nav-menu-links.active").trigger('click');
//    }
});
jQuery("#menu a").click(function (event) {
//    event.preventDefault();
    if (jQuery(this).next('ul').length) {
//        jQuery(this).next().toggle('fast');
        jQuery(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
    }
});

jQuery(".nav .nav-menu-links").click(function () {
    var active_nav = jQuery(this).hasClass('active');
    var data_img = '../../common/image/' + jQuery(this).attr('data-img');
    var icon_selector = jQuery(this).children().find('img');
    if (!jQuery("#menu").hasClass("show")) {
        jQuery("#showmenu").trigger("click");
    }
    if (active_nav) {
        icon_selector.attr('src', data_img + '-hover.svg');
    } else {
        icon_selector.attr('src', data_img + '.svg');
    }
});

jQuery(".nav .nav-menu-links").hover(function () {
    var data_img = '../../common/image/' + jQuery(this).attr('data-img');
    var icon_selector = jQuery(this).children().find('img');
    icon_selector.attr('src', data_img + '-hover.svg');
}, function () {
    var active_nav = jQuery(this).hasClass('active');
    var data_img = '../../common/image/' + jQuery(this).attr('data-img');
    var icon_selector = jQuery(this).children().find('img');
    if (!active_nav) {
        icon_selector.attr('src', data_img + '.svg');
    }
});
//side nav bar end

//wizard script start
jQuery(document).on('click', '.cell', function () {

    var jQuerythis = jQuery(this);

    jQuery('.cell').removeClass('prev next active');
    jQuerythis.addClass('active');

    if (jQuerythis.hasClass('step1')) {
        jQuery('.cell').removeClass('checked');
        jQuery('.step1').children().find('.number').html('1');
        jQuery('.step2').children().find('.number').html('2');
        jQuery('.step3').children().find('.number').html('3');
        jQuery('.step2').addClass('next');
        jQuery('.add_project_step_container').hide();
        current_step = 1;
        jQuery('#add_project_step_' + (current_step)).show();
        console.log(current_step);
    } else if (jQuerythis.hasClass('step2')) {
        jQuery('.cell').removeClass('checked');
        jQuery('.step1').children().find('.number').html('<i class="ion-ios-checkmark-empty"></i> ');
        jQuery('.step2').children().find('.number').html('2');
        jQuery('.step3').children().find('.number').html('3');
        jQuery('.step1').addClass('prev checked');
        jQuery('.step3').addClass('next');
        jQuery('.add_project_step_container').hide();
        current_step = 2;
        jQuery('#add_project_step_' + (current_step)).show();
    } else if (jQuerythis.hasClass('step3')) {
        jQuery('.cell').addClass('checked');
        jQuery('.step1').children().find('.number').html('<i class="ion-ios-checkmark-empty"></i> ');
        jQuery('.step2').children().find('.number').html('<i class="ion-ios-checkmark-empty"></i> ');
        jQuery('.step3').children().find('.number').html('3');
        jQuery('.step2').addClass('prev');
        jQuery('.add_project_step_container').hide();
        current_step = 3;
        jQuery('#add_project_step_' + (current_step)).show();
    }

});

jQuery(document).on('click', '.trigger', function () {
    var val = jQuery(this).data('val');
    if (val > 0) {
        jQuery('.cell.active').next('.cell').click();
    }
    if (val < 0) {
        jQuery('.cell.active').prev('.cell').click();
    }
})


var current_step = 1;
var step_1_status = false;
var step_2_status = false;
var step_3_status = false;
// Navigation to appropriate step
jQuery(document).ready(function () {
    jQuery(document).on('click', '.next_step', function () {
        var steps = jQuery('.cell');
        jQuery(steps).each(function (index, value) {
            var current_cell = jQuery(value);
            var check_class = 'step' + current_step;
            var class_against_step = current_cell.hasClass(check_class);
            if (class_against_step == true) {
                var check_validation = eval("step_" + current_step + "_status");
                if (check_validation == true) {
                    current_cell.removeClass('active').addClass('checked');
                    current_cell.children().find('.number').html('<i class="ion-ios-checkmark-empty"></i> ');
                    jQuery('.step' + (current_step + 1)).addClass('active');
                    jQuery('.add_project_step_container').hide();
                    jQuery('#add_project_step_' + (current_step + 1)).show();
                }
                else {
                    console.log('Validation failed');
                    alert('Validation failed');
                }

            }
        });
        current_step++;
    });

    var current_tab = 1;
    jQuery('.wizard_next_step').click(function () {
        var nav_items = jQuery('.navigation_ul').children();
        var nav_content_children = jQuery('.tab_content_container').children('.tab-pane');
        jQuery(nav_items).removeClass('active');
        jQuery(nav_content_children).removeClass('active');
        jQuery('.step_' + current_tab).removeClass('disabled');
        jQuery('.step_' + current_tab).find('span.number').hide();
        jQuery('.step_' + current_tab).find('span.checkmark').show();
        current_tab++;
        jQuery('.step_' + current_tab).addClass('active');
        jQuery('.tab_default_' + current_tab).addClass('active');
    });
    jQuery('li.tab_header').click(function (e) {
        if (!jQuery(this).hasClass('disabled')) {
            var classes = jQuery(this).attr('class').match(/step[\w-]*\b/);
            ;
            current_tab = classes[0].split('_')[1];
            return true;
        }
        else {
            return false;
        }
    });
    jQuery('#add_user_btn').click(function () {
        var member_email_id = jQuery('#member_email_id').val().trim();
        var member_role = jQuery('#member_role').val();
        var member_company_name = jQuery('#member_company_name').val().trim();
        var member_country = jQuery('#member_country').val();
        if (member_email_id && member_role != null && member_company_name && member_country != null) {
            var table_single_team_member = '<tr><td>' + member_email_id + '</td><td>' + member_role + '</td><td>' + member_company_name + '</td><td>' + member_country + '</td><td><a href="javascript:;" class="delete_member"><img src="image/Vendor-List-Delete.svg"  class="pull-right"></a></td></tr>';
            jQuery('#team_member_table_body').append(table_single_team_member);
            jQuery('#member_email_id').val('');
            jQuery('#member_role').val('');
            jQuery('#member_company_name').val('');
            jQuery('#member_country').val('');
            jQuery('.no_users').hide();

            if (jQuery('#team_member_table_body').children().length > 1) {
                jQuery('#done_btn').prop('disabled', false);
                jQuery('#done_btn').removeClass('cancel-btn').addClass('save-btn next_step');
            }
        }
        else {
            console.log("not able to add a member");

        }
    });
    jQuery('body').on('click', '.delete_member', function () {
        jQuery(this).parents('tr').remove();
        if (jQuery(this).parents('tbody').children().length == 0) {
            jQuery('#done_btn').prop('disabled', true);
            jQuery('#done_btn').removeClass('save-btn next_step').addClass('cancel-btn');
            jQuery('.no_users').show();
        }
    });
    jQuery('.service_type_option').click(function (e) {
        var service_type = jQuery(this).data('type');
        jQuery('.service_type_content').hide();
        jQuery('#' + service_type).show();
    });

    jQuery("#add_more_service").click(function () {
        jQuery("#appand_select_service").append('<div class="pub-tab-select-box select-more-service"><div class="col-md-3"> <div class="input-padding"><label>Select Service</label> <select class="selectpicker" id="member_role"><option>Copy Editing</option><option>option1</option><option>option2</option> </select>  </div> </div> </div>');
    });

//    jQuery("#add_vendor_short").click(function(){
//        console.log('test')
//        jQuery("#full_service_vendor").removeClass('#full-service-vendor-add-project-1').addClass('#full-service-vendor-add-project-2');
////        jQuery("#full_service_vendor").show("#full-service-vendor-add-project-2");
////        jQuery("#full_service_vendor").hide("#full-service-vendor-add-project-1");
//    });

    var paths = document.getElementsByClassName('styled');
    if (path) {
        var path = paths[paths.length - 1];
        var counter = 0;
        var total = 47;
        var length = path.r.baseVal.value * 2 * Math.PI;
        jQuery(path).css({
            'stroke-dasharray': length,
            'stroke-dashoffset': 0,
            'opacity': 1,
        })

        //simulate multiple requests completing at random times. setTimeout acts as success handler for ajax calls.
        for (var i = 0; i < total; ++i) {
            setTimeout(function () {
                counter++;
                var percentage = Math.ceil(100 * counter / total);
                var percent_symbol = '<span class="">%</span>';
                jQuery('.percentage').html(percentage + percent_symbol)
                jQuery(path).css({
                    'stroke-dashoffset': -((counter / total) * length),
                });

                if (percentage >= 100) {
                    setTimeout(function () {
                        document.getElementById('progress').classList.add('complete1');
                        //                            document.body.classList.add('complete1');
                        jQuery('.preloader-center').addClass('complete1');
                    }, 500);
                }
            }, (Math.random() * 5000));
        }
    }
});

//drag and drop
jQuery(document).ready(function () {


    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function (files) {
        console.log(files)
    }
    if (uploadForm != null) {
        uploadForm.addEventListener('submit', function (e) {
            var uploadFiles = document.getElementById('js-upload-files').files;
            e.preventDefault()

            startUpload(uploadFiles)
        });
    }
    if (dropZone != null) {
        dropZone.ondrop = function (e) {
            e.preventDefault();
            this.className = 'upload-drop-zone';

            startUpload(e.dataTransfer.files)
        }

        dropZone.ondragover = function () {
            this.className = 'upload-drop-zone drop';
            return false;
        }

        dropZone.ondragleave = function () {
            this.className = 'upload-drop-zone';
            return false;
        }
    }

});

jQuery('.notification_close_btn').click(function () {
    jQuery('.notification_container').hide();
    jQuery('.notifiaction-message-container').show();
});

jQuery('.notification_message_close_btn').click(function () {
    jQuery('.notifiaction-message-container').hide();
});



jQuery(document).on('change', '.btn-file :file', function () {
    var input = jQuery(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
});

jQuery('.btn-file :file').on('fileselect', function (event, label) {

    var input = jQuery(this).parents('.input-group').find(':text'),
            log = label;

    if (input.length) {
        input.val(log);
    } else {
        if (log)
            alert(log);
    }

});


/*Accordaion*/

jQuery(document).ready(function () {
    jQuery(".set > a").on("click", function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).siblings('.accordion-content').slideUp(200);
            jQuery(".set > a i").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
        } else {
            jQuery(".set > a i").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
            jQuery(this).find("i").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty");
            jQuery(".set > a").removeClass("active");
            jQuery(this).addClass("active");
            jQuery('.accordion-content').slideUp(200);
            jQuery(this).siblings('.accordion-content').slideDown(200);
        }

    });
});

jQuery(document).ready(function () {
    jQuery(".search-container-pagenation .pagenation-count").click(function () {
        $('.pagenation-count').removeClass('pagenation-active'); //remove all focus
        $(this).addClass('pagenation-active');  //add focus to curr
    });
});
jQuery(document).ready(function () {
    jQuery(".pagenation-right-icon").click(function () {
        var current = $('.pagenation-active');
        current.removeClass('pagenation-active'); //remove all focus
        current.next().first().addClass('pagenation-active');  //add focus to curr
    });
    jQuery(".pagenation-left-icon").click(function () {
        var current = $('.pagenation-active');
        current.removeClass('pagenation-active'); //remove all focus
        current.prev().first().addClass('pagenation-active');  //add focus to curr
    });
});



jQuery("#process-start-btn").click(function () {
    jQuery(this).hide();
});
jQuery("#process-start-btn").click(function () {
    jQuery("#process-end-btn").show();
});


jQuery("#end_task").click(function () {
    jQuery("#process-end-btn,#project_end_task,#project_open_button,.modal-backdrop").hide();
});
jQuery("#end_task").click(function () {
    jQuery("#re_open_task,#project_close_button").show();
});

jQuery("#assign_task_button").click(function () {
    jQuery("#assign_project").hide();
});
jQuery("#assign_task_button").click(function () {
    jQuery(".assign-task-open,#re_assign_project").show();
});



// jQuery("#check_list_preprocess_checked").click(function(){
//        jQuery("#assign_service_task,.modal-backdrop").hide();
//    });
jQuery("#check_list_preprocess_checked").click(function () {
    jQuery(".checklist-preprocess-completed").show();
});

jQuery(".project-operation-menu").click(function () {
    jQuery(".project-task-operation").css('margin-top', '0px');
    jQuery(".project-task-operation").toggle();
    var top = jQuery(".project-task-operation").offset().top - (jQuery(this).offset().top + 40);
    jQuery(".project-task-operation").css('margin-top', '-' + top + 'px');
});

jQuery("#add_check_list_preprocess-button,#check_list_preprocess_checked").click(function () {
    jQuery("#add_check_list_preprocess").show();
});
jQuery(".add-query-btn").click(function () {
    jQuery(".warning-empty").hide();
    jQuery(".warning-empty-red").show();
});

jQuery("#add_task_button").click(function () {
    jQuery(".ac-add-project").show();
    jQuery(".modal-backdrop,.modal,.project-task-operation").hide();

});
//jQuery(document).ready(function () {
//    $('.slimscroll').slimScroll();
//});




jQuery(".project-current-status li").click(function () {
    var status = jQuery(this).html();
    jQuery('.project-state,.page-open-btn-status').html(status);
    jQuery(".project-current-status").hide(200);
});


jQuery("#project_current_status_dropdown,#change_status").click(function () {
    jQuery(".project-current-status").toggle(200);
});
jQuery("#project_current_stage_dropdown").click(function () {
    jQuery(".project-current-stage").toggle(200);
});
jQuery(".project-current-stage li").click(function () {
    var status = jQuery(this).html();
    jQuery('.project-stage').html(status);
    jQuery(".project-current-stage").hide(200);
});
jQuery(".project-stage-status li").click(function () {
    var status = jQuery(this).html();
    jQuery('.project-stage-status-append').html(status);
    jQuery(".project-current-status").hide(200);
});

jQuery("#project_stage_selection").click(function () {
    jQuery(".project-stage-status").toggle();
});

jQuery("#change_status").click(function () {
    jQuery(".Change-current-status").toggle(200);
});

//Artical status select

jQuery("#artical_current_status").click(function () {
    jQuery(".artical-current-status").toggle(200);
});
jQuery(".artical-current-status li").click(function () {
    var status = jQuery(this).html();
    jQuery('.project-state-artical').html(status);
    jQuery('.artical-current-status').hide(200);
});



jQuery(".Change-current-status li").click(function () {
    var status = jQuery(this).html();
    jQuery('.project-current-state').html(status);
    jQuery('.Change-current-status').hide(200);
});


jQuery(".notes-close-icon").click(function () {
    jQuery("#my_notes_container").hide();
});

//TL Notification
jQuery("#end_task").click(function () {
    jQuery(".tl-notification .page-open-btn").hide();
    jQuery(".tl-notification .page-close-btn").show();
});
jQuery("#end_task").click(function () {
    jQuery(".default-status").show();
});

jQuery('#search').click(function () {
    jQuery(this).addClass('opened');
});

//Query Scheduling Start

jQuery(".show-response").click(function () {
    jQuery(this).hide();
    jQuery(".query-response-set").show();
});
jQuery(".hide-responce").click(function () {
    jQuery(".query-response-set").hide();
    jQuery(".show-response").show();
});
jQuery(".header-notification-content").click(function () {
    jQuery(".timeline-header-notification").show();
});

//jQuery(document).ready(function () {
//    jQuery(".koalapse__title").click(function(){
//       jQuery(this).next().toggle();
//       jQuery(this).toggleClass("icon");
//    });
//});
//



function accClose(e, $this) {
    $this.find('span').fadeIn(200);
}

function accOpen(e, $this) {
    $this.find('span').fadeOut(200)
}

//Notification
jQuery(document).ready(function () {
    var $redio_select_area = jQuery('#redio_select_area > .radio-desc');
    $redio_select_area.first().show()
    jQuery('input[type=radio]').on('change', function () {
        $redio_select_area.hide();
        $redio_select_area.eq(jQuery('input[type=radio]').index(this)).show();
    });
});
jQuery(document).ready(function () {
    $('input:checkbox').change(function () {
        if ($(this).is(":checked")) {
            $(this).parents('.other-queries-body-set').addClass("select-to-merge-bg-color");
        } else {
            $(this).parents('.other-queries-body-set').removeClass("select-to-merge-bg-color");
        }
    });
});

jQuery(document).ready(function () {
    var $cbs = $("input:checkbox").change(function () {
        if ($cbs.is(":checked")) {
            $(this).parents('.all-queries-conatiner').children().find('.other-query-nocheck-icons').hide();
            $(this).parents('.all-queries-conatiner').children().find('.other-query-checked-icons').show();
        } else {
            $(this).parents('.all-queries-conatiner').children().find('.other-query-nocheck-icons').show();
            $(this).parents('.all-queries-conatiner').children().find('.other-query-checked-icons').hide();
        }
    });
});


jQuery(document).ready(function () {
    var $redio_select_area = jQuery('#query-redio-select-area > .radio-desc');
    $redio_select_area.first().show()
    jQuery('input[type=radio]').on('change', function () {
        $redio_select_area.hide();
        $redio_select_area.eq(jQuery('input[type=radio]').index(this)).show();
    });
});