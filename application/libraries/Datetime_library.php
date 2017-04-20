<?php

class Datetime_library {

    function get_week($date) {
        $dayOfWeek = date('l');
        $offset = 0;
        switch ($dayOfWeek) {
            case 'Monday':
                $offset = 0;
                break;
            case 'Tuesday':
                $offset = 1;
                break;
            case 'Wednesday':
                $offset = 1;
                break;
            case 'Thursday':
                $offset = 1;
                break;
            case 'Friday':
                $offset = 1;
                break;
            case 'Saturday':
                $offset = 1;
                break;
            default:
                $offset = 1;
                break;
        }
        $monday = strtotime('-' . $offset . ' day', strtotime($date));
        $sunday = strtotime('+6 day', $monday);
        $week = array(
            'monday' => date('Y-m-d', $monday),
            'sunday' => date('Y-m-d', $sunday)
        );
        return $week;
    }

    function get_month($month, $year) {
        $count = days_in_month($month, $year);
        return array(
            'first' => date('Y-m-d', strtotime("$year-$month-1")),
            'last' => date('Y-m-d', strtotime("$year-$month-$count"))
        );
    }

    function get_year($year) {
        return array(
            'first' => date('Y-m-d', strtotime("$year-1-1")),
            'last' => date('Y-m-d', strtotime("$year-12-31"))
        );
    }

    function get_last_week() {
        $date = strtotime('-7 day', strtotime(date('Y-m-d')));
        return $this->get_week($date);
    }

    function get_current_week() {
        $date = date('Y-m-d');
        return $this->get_week($date);
    }

    function get_yesterday() {
        $yesterday = strtotime('-1 day', strtotime(date('Y-m-d')));
        return date('Y-m-d', $yesterday);
    }

    function get_current_month() {
        $month = date('m');
        $year = date('Y');
        return $this->get_month($month, $year);
    }

    function get_last_month() {
        $month = date('m') - 1;
        $year = date('Y');
        return $this->get_month($month, $year);
    }

    function get_current_year() {
        $year = intval(date('Y'));
        return $this->get_year($year);
    }
    function get_last_year(){
        $year = date('Y')-1;
        return $this->get_year($year);
    }

}
